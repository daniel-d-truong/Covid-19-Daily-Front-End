import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Motion, spring } from "react-motion";
import MapChart from "./MapChart";
import DataCard from './DataCard';
import { DataCardValues } from '../constants/StyleConstants';
import { WORLD } from '../constants/ValueConstants';
import { MapProps } from '../constants/PropConstants';

import "./styles.css";
import { changeCountryName, getMapWidth } from "../utilities/utils";

const Map: React.FunctionComponent<MapProps> = (props) => {
  // States
  const [content, setContent] = useState("");
  const [mapWidth, setMapWidth] = useState(getMapWidth());

  const opacityConfig = { stiffness: 30, damping: 14 };
  const scaleConfig = { stiffness: 100, damping: 14 };
  // TODO: Deal with mobile responsiveness later.
  window.addEventListener('resize', () => {
    setMapWidth(getMapWidth());
  });

  return (
    <div className="map">
      <MapChart setTooltipContent={setContent} setWorldData={props.setWorldData} 
                setCountry={props.setCountry} />
      <ReactTooltip html={true}>{content}</ReactTooltip>

      <Motion defaultStyle={{x: mapWidth, opacity: 0}} style={{
        x: spring(props.country !== WORLD ? mapWidth - DataCardValues.width : mapWidth, scaleConfig), 
        opacity: spring(props.country !== WORLD ? 1 : 0, opacityConfig)
      }}>
        {(style) => {
          const cardStyle: React.CSSProperties = {
            transform: `translateX(${style.x}px)`,
            opacity: style.opacity
          };
          return (
            <DataCard style={cardStyle} countryName={props.country} 
                      countryData={props.worldData[changeCountryName(props.country)]}/>
          )
        }}
        
      </Motion>
    </div>
  );
}

export default Map;