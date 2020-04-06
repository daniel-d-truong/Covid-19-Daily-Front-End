import { findByLabelText } from "@testing-library/react";

export const DataCardValues: Record<string, number> = {
    width: 400,
    zIndex: 9
}

export const DataCardStyle: React.CSSProperties = {
    backgroundColor: "#DCDCDC",
    opacity: 0.8,
    height: `90%`,
    // padding: '2px',
    borderStyle: "solid",
    borderRadius: "20px",
    borderWidth: "1px",
    textAlign: "center",
    verticalAlign: "middle",
    width: `${DataCardValues.width}px`,
    zIndex: DataCardValues.zIndex,
};