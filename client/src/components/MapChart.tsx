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
import { WORLD } from "../constants/ValueConstants";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

let countrySelected = WORLD;

const MapChart: React.FC<MapChartProps> = (props) => {
  
  let data: string | any | any = {};

  useEffect(() => {    // eslint-disable-next-line
    getAllData().then(fetchedData => { 
      props.setWorldData(fetchedData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      // Turn off country selection
      const { NAME } = geo.properties;
      if (countrySelected === NAME) {
        props.setCountry(WORLD);
        countrySelected = WORLD;
      } else {
        props.setCountry(NAME);
        countrySelected = NAME;
      }
  };

  const hideCard = () => {
    // TODO: Do later. Hide the card when clicking anywhere on the map.
  };
  const color = "#FFFFFF";

  return (
    <div className="react-map">
      <ComposableMap data-tip="" projectionConfig={{ scale: 175 }} onClick={hideCard}>
        <ZoomableGroup center={[0,-10]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                return (
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
                        fill: color,
                        outline: "none"
                      },
                      hover: {
                        fill: "#52050A",
                        outline: "none",
                        cursor: "pointer"
                      },
                      pressed: {
                        fill: "#000000",
                        outline: "none"
                      },
                    }}
                  />
              )})
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);