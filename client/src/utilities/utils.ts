const countryNames: Record<string, string> = {
    "united states of america": "usa"
};

export const changeCountryName = (country: string) => {
    return country in countryNames ? countryNames[country] : country;
}

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