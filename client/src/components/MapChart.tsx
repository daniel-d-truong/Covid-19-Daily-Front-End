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
import { getAllData, CountryData } from '../utilities/requests';
import { rounded, changeCountryName } from '../utilities/utils'


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ( obj: {setTooltipContent: React.Dispatch<React.SetStateAction<string>>} ) => {
  const setTooltipContent = obj["setTooltipContent"]
  let data: string | string | any = {};
  
  useEffect(() => {    // eslint-disable-next-line
    getAllData().then(fetchedData => {data = fetchedData});
    console.log(data);
  });

  const setTooltip = (geo: any) => {
      const formatData = (countryData: Record<string, number>) => {
        if (!countryData) return "incorrect country name"
        return `Total Cases: ${countryData[CountryData.TOTAL_CASES]}<br>New Cases Today: ${countryData[CountryData.NEW_CASES]}`;
      };

      const { NAME } = geo.properties;
      const name = changeCountryName(NAME.toLowerCase());
      const countryData: Record<string, number> = data[name];

      let content = `<h2>${NAME}</h2><br>${data==={} ? "still loading..." : formatData(countryData)}`
      setTooltipContent(`${content}`);
  };

  // console.log("renders again")
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => setTooltip(geo)}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
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
    </>
  );
};

export default memo(MapChart);
