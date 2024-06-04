import React from "react";
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from "react-speedometer";


import {
  Airspeed,
  Altimeter,
  AttitudeIndicator,
  HeadingIndicator,
  TurnCoordinator,
  Variometer,
} from "react-typescript-flight-indicators";

const Gauges = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div >
          <Variometer vario={(Math.random() - 0.5) * 4000}  />
        </div>

        <div className="">
          <Speedometer value={130} fontFamily="squada-one">
            <Background />
            <Arc />
            <Needle />
            <Progress />
            <Marks />
            <Indicator />
          </Speedometer>
        </div>

        <div>
          <Altimeter altitude={Math.random() * 28000} />
        </div>

        <div>
          <HeadingIndicator heading={Math.random() * 360}  />
        </div>
      </div>
    </>
  );
};

export default Gauges;
