
export const DataCardValues: Record<string, number> = {
    width: 350,
    zIndex: 9
}

export const DataCardStyle: React.CSSProperties = {
    backgroundColor: "#CCCCCC",
    height: `90%`,
    padding: '2px',
    textAlign: "center",
    verticalAlign: "middle",
    width: `${DataCardValues.width}px`,
    zIndex: DataCardValues.zIndex
};