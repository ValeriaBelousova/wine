import React from "react";
import { render } from "react-dom";
import { Map } from "@commodityvectors/react-mapbox-gl";

import "./style.css";

const BaseMap = ({ children, ...props }) => {
  return (
    <Map
      mapStyle={"mapbox://styles/mapbox/streets-v10"}
      accessToken="pk.eyJ1IjoiY29tbW9kaXR5dmVjdG9ycyIsImEiOiJjamR3eWFvd3owcTUwMzRzNmg1eXJjYWlzIn0.QESIireyCutiiFOTlI4y5w"
      {...props}
    >
      {children}
    </Map>
  );
};

const TwoFingerDrag = Map.component(TwoFingerDragComponent);
function TwoFingerDragComponent({ map }) {
  map.on("click", event => {
    console.log(event);
  });

  return null;
}

const App = () => {
  return (
    <>
      <BaseMap>
        <TwoFingerDrag />
      </BaseMap>
      <h1> More content here ↓ </h1>
      <p> Some text under map </p>
      <p> Try scroll map using one finger (page not scrolling) </p>
    </>
  );
};

render(<App />, document.getElementById("root"));
