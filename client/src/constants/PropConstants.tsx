export interface CovidInfoProps {
    countryData: string | any,
    countryName: string
}

export interface DataCardProps {
    style: React.CSSProperties,
    countryName: string, 
    countryData: Record<string, number>
};

export interface MapProps {
    country: string,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    worldData: string | string | any,
    setWorldData: React.Dispatch<React.SetStateAction<string | any | any>>,
}

export interface MapChartProps {
    setTooltipContent: React.Dispatch<React.SetStateAction<string>>,
    setWorldData: React.Dispatch<React.SetStateAction<string | any | any>>,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
};