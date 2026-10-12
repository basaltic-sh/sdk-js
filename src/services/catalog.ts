// Generated from the Basaltic API definitions. Do not edit.
import type { Transport, Operation } from "../transport.js";
import type { RequestOptions } from "../config.js";
import type { ApiResponse, Page } from "../response.js";
import { referenceScope, resolveReference } from "../response.js";
export type GetCountryResponse = { country: CountryDetail };
export type GetRegionResponse = Region;
export type ListCitiesQuery = {
  state?: string;
  country?: string;
  q?: string;
  limit?: number;
};
export type ListCitiesResponse = { cities: City[]; meta: GeoPage };
export type ListCitiesItem = City;
export type ListCountriesResponse = { countries: Country[]; meta: GeoPage };
export type ListCountriesItem = Country;
export type ListRegionsQuery = { name?: string; crn?: string };
export type ListRegionsResponse = { regions: Region[]; default: string };
export type ListRegionsItem = Region;
export type ListStatesQuery = { country: string };
export type ListStatesResponse = { states: State[]; meta: GeoPage };
export type ListStatesItem = State;
export type LookupPostalCodeQuery = { country: string };
export type LookupPostalCodeResponse = { postal_code: PostalCode };
export type CountryDetail = Country & {
  rules: CountryRules;
  postal_lookup: boolean;
};
export type Country = {
  id: string;
  crn: string;
  code: string;
  iso3: string;
  name: string;
  calling_code: string;
};
export type CountryRules = {
  customer_types: ("individual" | "company")[];
  name_labels: { [key: string]: string };
  tax_ids: { [key: string]: TaxIDRule[] };
  fields: AddressField[];
};
export type TaxIDRule = {
  kind: string;
  label: string;
  mask?: string;
  pattern?: string;
  validator?: "br_cpf" | "br_cnpj" | "ar_cuit" | "cl_rut";
  example?: string;
  required: boolean;
};
export type AddressField = {
  key:
    | "street_name"
    | "street_number"
    | "complement"
    | "neighborhood"
    | "city"
    | "state"
    | "postal_code";
  label: string;
  required: boolean;
  max?: number;
  mask?: string;
  pattern?: string;
  example?: string;
  source?: "list" | "free";
  require_metadata?: string;
};
export type Region = {
  state: "planned" | "active" | "restricted" | "retiring" | "retired";
  accepting_new_resources: boolean;
  crn: string;
  code: string;
  name: string;
  location: string;
  country_code: string;
  available: boolean;
  coming_soon: boolean;
};
export type City = {
  id: string;
  crn: string;
  name: string;
  country: ResourceRef;
  state: ResourceRef | null;
};
export type ResourceRef = { id: string; crn: string; name?: string };
export type GeoPage = { total: number; limit: number; has_more: boolean };
export type State = {
  id: string;
  crn: string;
  code: string;
  name: string;
  country: ResourceRef;
};
export type PostalCode = {
  code: string;
  country: ResourceRef;
  state: ResourceRef | null;
  city: ResourceRef | null;
  address: { [key: string]: string };
  source: string;
};
const operations = {
  getCountry: {
    id: "getCountry",
    method: "GET",
    path: "/v1/countries/{country}",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  getRegion: {
    id: "getRegion",
    method: "GET",
    path: "/v1/regions/{code}",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
  listCities: {
    id: "listCities",
    method: "GET",
    path: "/v1/cities",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      state: { style: "form", explode: true },
      country: { style: "form", explode: true },
      q: { style: "form", explode: true },
      limit: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "cities",
  },
  listCountries: {
    id: "listCountries",
    method: "GET",
    path: "/v1/countries",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {},
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "countries",
  },
  listRegions: {
    id: "listRegions",
    method: "GET",
    path: "/v1/regions",
    authenticated: false,
    requiredQuery: [],
    requiredHeaders: [],
    queryEncoding: {
      name: { style: "form", explode: true },
      crn: { style: "form", explode: true },
    },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "regions",
  },
  listStates: {
    id: "listStates",
    method: "GET",
    path: "/v1/states",
    authenticated: false,
    requiredQuery: ["country"],
    requiredHeaders: [],
    queryEncoding: { country: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
    itemsKey: "states",
  },
  lookupPostalCode: {
    id: "lookupPostalCode",
    method: "GET",
    path: "/v1/postal-codes/{code}",
    authenticated: false,
    requiredQuery: ["country"],
    requiredHeaders: [],
    queryEncoding: { country: { style: "form", explode: true } },
    bodyRequired: false,
    contentType: "",
    accept: "application/json",
  },
} as const satisfies Record<string, Operation>;
export class CatalogService {
  constructor(private readonly transport: Transport) {}
  /** Get a country and its address rules */
  getCountry(
    country: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetCountryResponse>> {
    return this.transport.json<GetCountryResponse>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.getCountry,
      { country },
      undefined,
      {},
      options,
    );
  }
  /** Get a region */
  getRegion(
    code: string,
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRegionResponse>> {
    return this.transport.json<GetRegionResponse>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.getRegion,
      { code },
      undefined,
      {},
      options,
    );
  }
  getRegionByReference(
    reference: string,
    scope: Omit<ListRegionsQuery, "name" | "crn" | "marker"> = {},
    options: RequestOptions = {},
  ): Promise<ApiResponse<GetRegionResponse>> {
    return resolveReference<GetRegionResponse>(
      reference,
      (id) => this.getRegion(id, options),
      (filter) =>
        this.listRegions({ ...referenceScope(scope), ...filter }, options),
      true,
    );
  }
  /** List cities */
  listCities(
    query: ListCitiesQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListCitiesResponse, ListCitiesItem>> {
    return this.transport.page<ListCitiesResponse, ListCitiesItem>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.listCities,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List countries */
  listCountries(
    options: RequestOptions = {},
  ): Promise<Page<ListCountriesResponse, ListCountriesItem>> {
    return this.transport.page<ListCountriesResponse, ListCountriesItem>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.listCountries,
      {},
      undefined,
      {},
      options,
    );
  }
  /** List regions */
  listRegions(
    query: ListRegionsQuery = {},
    options: RequestOptions = {},
  ): Promise<Page<ListRegionsResponse, ListRegionsItem>> {
    return this.transport.page<ListRegionsResponse, ListRegionsItem>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.listRegions,
      {},
      undefined,
      query,
      options,
    );
  }
  /** List a country's states */
  listStates(
    query: ListStatesQuery,
    options: RequestOptions = {},
  ): Promise<Page<ListStatesResponse, ListStatesItem>> {
    return this.transport.page<ListStatesResponse, ListStatesItem>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.listStates,
      {},
      undefined,
      query,
      options,
    );
  }
  /** Look up a postal code */
  lookupPostalCode(
    code: string,
    query: LookupPostalCodeQuery,
    options: RequestOptions = {},
  ): Promise<ApiResponse<LookupPostalCodeResponse>> {
    return this.transport.json<LookupPostalCodeResponse>(
      "catalog",
      "https://catalog.basaltic.sh",
      operations.lookupPostalCode,
      { code },
      undefined,
      query,
      options,
    );
  }
}
