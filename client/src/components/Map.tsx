import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Motion, spring } from "react-motion";
import MapChart from "./MapChart";
import DataCard from './DataCard';
import { DataCardValues } from '../constants/StyleConstants';

import "./styles.css";

const Map: React.FunctionComponent = () => {
  // States
  const [content, setContent] = useState("");
  const [mapWidth, setMapWidth] = useState(.9*window.innerWidth);
  const [worldData, setWorldData] = useState({} as string | string | any);
  const [country, setCountry] = useState("World");

  const opacityConfig = { stiffness: 30, damping: 14 };
  const scaleConfig = { stiffness: 30, damping: 14 };
  // TODO: Deal with mobile responsiveness later.

  return (
    <div className="map">
      <MapChart setTooltipContent={setContent} setWorldData={setWorldData} setCountry={setCountry} />
      <ReactTooltip html={true}>{content}</ReactTooltip>

      <Motion defaultStyle={{x: mapWidth, opacity: 0}} style={{x: spring(mapWidth - DataCardValues.width, scaleConfig), opacity: spring(0.75, opacityConfig)}}>
        {(style) => {
          const cardStyle: React.CSSProperties = {
            transform: `translateX(${style.x}px)`,
            opacity: style.opacity
          };
          return (
            <DataCard style={cardStyle} countryName={country} countryData={worldData[country]}/>
          )
        }}
        
      </Motion>
    </div>
  );
}

export default Map;