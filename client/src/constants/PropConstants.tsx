export interface DataCardProps {
    style: React.CSSProperties,
    countryName: string, 
    countryData: Record<string, number>
};

export interface MapChartProps {
    setTooltipContent: React.Dispatch<React.SetStateAction<string>>,
    setWorldData: React.Dispatch<React.SetStateAction<string | any | any>>,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
};