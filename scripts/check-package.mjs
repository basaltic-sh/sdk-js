import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = process.cwd();
const temp = mkdtempSync(join(tmpdir(), "basaltic-package-"));
const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const run = (bin, args, cwd = root) =>
  execFileSync(bin, args, {
    cwd,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
try {
  const [pack] = JSON.parse(
    run(npm, [
      "pack",
      "--ignore-scripts",
      "--json",
      "--pack-destination",
      temp,
    ]),
  );
  assert.equal(pack.name, "@basaltic-sh/sdk-js");
  const paths = pack.files.map((file) => file.path);
  for (const path of paths) {
    assert.match(
      path,
      /^(?:dist\/(?:esm|cjs)\/|src\/|package\.json$|README\.md$|LICENSE$|SECURITY\.md$)/,
    );
    assert.doesNotMatch(
      path,
      /(?:^|\/)(?:internal|node_modules|AGENTS\.md|CLAUDE\.md|\.env|\.npmrc|\.git)/i,
    );
    const content = readFileSync(path, "utf8");
    assert.doesNotMatch(
      content,
      /git\.bycoded\.com|\/home\/|\/builds\/|BEGIN (?:RSA |EC )?PRIVATE KEY/,
    );
    if (path.endsWith(".map")) {
      const map = JSON.parse(content);
      for (const source of map.sources)
        assert.ok(!source.startsWith("/") && !source.includes("://"));
    }
  }
  for (const path of [
    "dist/cjs/index.js",
    "dist/esm/index.js",
    "dist/cjs/index.d.ts",
    "dist/esm/index.d.ts",
    "src/index.ts",
    "LICENSE",
    "SECURITY.md",
  ])
    assert.ok(paths.includes(path), path);
  writeFileSync(join(temp, "package.json"), '{"private":true,"type":"module"}');
  run(
    npm,
    [
      "install",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      "--package-lock=false",
      join(temp, pack.filename),
    ],
    temp,
  );
  for (const mode of ["module", "commonjs"]) {
    const load =
      mode === "module"
        ? 'import { Client, VERSION } from "@basaltic-sh/sdk-js";'
        : 'const { Client, VERSION } = require("@basaltic-sh/sdk-js");';
    run(
      process.execPath,
      [
        "--input-type=" + mode,
        "-e",
        load +
          " if (!new Client({anonymous:true}).compute || VERSION !== " +
          JSON.stringify(pack.version) +
          ') throw Error("invalid exports");',
      ],
      temp,
    );
  }
  const sample =
    'import { Client } from "@basaltic-sh/sdk-js"; const client = new Client({accessToken:"example"}); void client.compute.listInstances({limit:1});';
  for (const extension of ["mts", "cts"]) {
    const file = join(temp, "consumer." + extension);
    writeFileSync(file, sample);
    run(
      process.execPath,
      [
        resolve("node_modules/typescript/bin/tsc"),
        "--noEmit",
        "--strict",
        "--target",
        "ES2022",
        "--module",
        "NodeNext",
        file,
      ],
      temp,
    );
  }
  console.log(
    `Verified ${paths.length} packed files, clean source maps, ESM/CommonJS exports and declarations.`,
  );
} finally {
  rmSync(temp, { recursive: true, force: true });
}
