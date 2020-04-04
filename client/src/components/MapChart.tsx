/**
 * File credited to https://www.react-simple-maps.io/examples/map-chart-with-tooltip/.
 */
 

import React, { useEffect, memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { MapChartProps } from '../constants/PropConstants'
import { CountryData, changeCountryName } from '../utilities/utils'
import { getAllData } from '../utilities/requests';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart: React.FC<MapChartProps> = (props) => {
  
  let data: string | any | any = {};

  useEffect(() => {    // eslint-disable-next-line
    getAllData().then(fetchedData => { 
      props.setWorldData(fetchedData);
      data = fetchedData;
    });
  });

  const setTooltip = (geo: any) => {
      const formatData = (countryData: Record<string, number>) => {
        if (!countryData) return "incorrect country name"
        return `Total Cases: ${countryData[CountryData.TOTAL_CASES]}<br>New Cases Today: ${countryData[CountryData.NEW_CASES]}`;
      };

      const { NAME } = geo.properties;
      // console.log(NAME);
      const name = changeCountryName(NAME);
      const countryData: Record<string, number> = data[name];

      let content = `<h2>${NAME}</h2><br>${data==={} ? "still loading..." : formatData(countryData)}`
      props.setTooltipContent(`${content}`);
      // props.setCountry(NAME);
  };

  const clickCountry = (geo: any) => {
      const { NAME } = geo.properties;
      props.setCountry(NAME);
  };

  // const createCard = (geo: any) => {
      
  // };

  // console.log("renders again")
  return (
    <div className="react-map">
      <ComposableMap data-tip="" projectionConfig={{ scale: 175 }}>
        <ZoomableGroup center={[0,-10]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltip(geo)}
                  onMouseLeave={() => {
                    props.setTooltipContent("");
                  }}
                  onClick={() => clickCountry(geo)}
                  stroke="#EAEAEC"
                  style={{
                    default: {
                      fill: "#FFFFFF",
                      outline: "none"
                    },
                    hover: {
                      fill: "#52050A",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);