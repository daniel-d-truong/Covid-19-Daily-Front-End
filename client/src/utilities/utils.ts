const countryNames: Record<string, string> = {
    "united states of america": "usa",
    "dem. rep. congo": "drc",
    "central african rep.": "car",
    "côte d'ivoire": "ivory coast",
    "falkland is.": "falkland islands",
    "united kingdom": "uk",
    "n. cyprus": "cyprus",
    "dominican rep.": "dominican republic",
    "north korea": "n. korea",
    "south korea": "s. korea"
};

export const changeCountryName = (country: string) => {
    country = country.toLowerCase();
    return country in countryNames ? countryNames[country] : country;
};

export const rounded = (num: number) => {
    console.log(num);
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
};

// May need to update this in response to making stuff more dynamic
export enum CountryData {
    TOTAL_CASES = "total_cases",
    NEW_CASES = "new_cases",
    TOTAL_DEATHS = "total_deaths", 
    NEW_DEATHS = "new_deaths",
    TOTAL_RECOVERED = "total_recovered",
    ACTIVE_CASES = "active_cases",
    SERIOUS_CRITICAL = "serious_critical", 
    TOTAL_PER_MIL = "total_per_million",
    DEATHS_PER_MIL = "deaths_per_million"
};

export type CovidDataByCountry = {
    total_cases: number;
    new_cases: number;
    total_deaths: number;
    new_deaths: number;
    total_recovered: number;
    active_cases: number;
    serious_critical: number;
    total_per_million: number;
    deaths_per_million: number
}