import React from "react";
import Slider from "../components/Slider";
import telemetrycss from '../assets/Telemetry.module.css'

const TelemetryLogs = () => {
  return (
    <>
      <div style={{display:"flex",height:'14rem'}}>
        <div className={telemetrycss.childcontainer}>
          <button className={telemetrycss.mainbtn}>Load Log</button>

          <button className={telemetrycss.mainbtn}>Play</button>

          <button className={telemetrycss.mainbtn1}>Tlog {'>'} Kml .or Graph</button>
        </div>

        <div className={telemetrycss.slidercontainer}>
          <div style={{marginBottom:'0.75rem'}}>
            <Slider />
          </div>
          <p>speed</p>
          <div style={{display:"flex",flexWrap:"wrap"}}>
          <button className={telemetrycss.btn}>0.1</button>
          <button className={telemetrycss.btn}>0.25</button>
          <button className={telemetrycss.btn}>0.5</button>
          <button className={telemetrycss.btn}>1x</button>
          <button className={telemetrycss.btn}>2x</button>
          <button className={telemetrycss.btn}>5x</button>
          <button className={telemetrycss.btn}>10x</button>
          </div>
        </div>

        <div style={{display:"grid",marginLeft:'1.5rem'}}>
          <p style={{marginTop:'1.25rem'}}>0.00%</p>
          <p style={{marginBottom:'4rem'}}>x 1.0</p>
        </div>
      </div>
    </>
  );
};

export default TelemetryLogs;
