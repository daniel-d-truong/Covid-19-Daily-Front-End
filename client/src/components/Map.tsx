import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

const Map = () => {
  const [content, setContent] = useState("");

  // TODO: Deal with mobile responsiveness later.

  return (
    <div className="map">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip html={true}>{content}</ReactTooltip>
    </div>
  );
}

export default Map;