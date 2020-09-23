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
    "south korea": "s. korea",
    WORLD: "total"    
};

export enum ArticleData {
    AUTHOR = "author",
    CONTENT = "content",
    DESC = "description",
    PUBLISHED_AT = "publishedAt",
    TITLE = "title",
    URL = "url",
    URL_TO_IMAGE = "urlToImage"
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

export const createTweet = (country: string, data: Record<string, any>, newsArticles: Array<Record<string, any>>): string => {
    if (data == null || newsArticles.length === 0) { return '' };
    const date: string = new Date().toLocaleDateString();
    return `Coronavirus has greatly affected our world. As of ${date} in ${country}, the data shows
       
        Total Cases: ${data[CountryData.TOTAL_CASES]}
        Total Per Million: ${data[CountryData.TOTAL_PER_MIL]}
        Total Deaths: ${data[CountryData.TOTAL_DEATHS]}

Furthermore, this article (${newsArticles[1][ArticleData.URL]}) shows ... [YOUR WORDS].

Spread the word about the current news, as covid continues to affect our lives. #coviddaily
     `;
}

export const commaSeparators = (num: number) => {
    if (!num) { return 0; }
    let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
};

export const getMapWidth = () => {
    return 0.9*window.innerWidth;
};

export const goToNewPage = (link: string) => {
    window.open(link);
};

export const goToPageWithParams = (link: string, params: Record<string, string>) => {
    goToNewPage(link+Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&'));
};