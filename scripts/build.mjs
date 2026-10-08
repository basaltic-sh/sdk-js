import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const expected = `// Generated from package.json by the build.\nexport const VERSION = ${JSON.stringify(pkg.version)};\n`;
// Release tooling checks that the committed version and tag agree. Never inject
// a private Git revision, build path, author, or environment into distributed JS.
writeFileSync("src/version.ts", expected);
rmSync("dist", { recursive: true, force: true });
execFileSync(
  process.execPath,
  ["node_modules/typescript/bin/tsc", "-p", "tsconfig.json"],
  { stdio: "inherit" },
);
// NodeNext determines format from the nearest package boundary. Keep the source
// paths identical in both builds so declarations and maps reference shipped src/.
writeFileSync("src/package.json", '{"type":"commonjs"}\n', { flag: "wx" });
try {
  execFileSync(
    process.execPath,
    ["node_modules/typescript/bin/tsc", "-p", "tsconfig.cjs.json"],
    { stdio: "inherit" },
  );
} finally {
  rmSync("src/package.json");
}
writeFileSync("dist/cjs/package.json", '{"type":"commonjs"}\n');
