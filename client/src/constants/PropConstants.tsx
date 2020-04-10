export interface CovidInfoProps {
    countryData: string | any,
    countryName: string
}

export interface DataCardProps {
    style: React.CSSProperties,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countryName: string, 
    countryData: Record<string, number>,
    newsArticles: Array<Record<string, string>>,
    setNewsArticles: React.Dispatch<React.SetStateAction<Array<Record<string, string>>>>
};

export interface MapProps {
    country: string,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    worldData: string | string | any,
    setWorldData: React.Dispatch<React.SetStateAction<string | any | any>>,
    newsArticles: Array<Record<string, string>>
    setNewsArticles: React.Dispatch<React.SetStateAction<Array<Record<string, string>>>>
};

export interface MapChartProps {
    setTooltipContent: React.Dispatch<React.SetStateAction<string>>,
    setWorldData: React.Dispatch<React.SetStateAction<string | any | any>>,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
};

export interface NewsCardProps {
    desc: string,
    title: string,
    href: string,
    pic: string
};

export interface TweetButtonProps {
    country: string,
    data: string | string | any,
    newsArticles: Array<Record<string, string>>
};

export interface TextBoxProps {
    dynamicData: Record<string, string>,
    formattedString: string
    setFormattedString: Function
};