import React from "react";
import dataflashcss from '../assets/Dataflash.module.css'


const DataFlashLogs = () => {
  return (
    <div style={{display:'grid',height:'14rem'}}>
      <div className={dataflashcss.childcontainer}>
        <button className={dataflashcss.btn}>Download DataFlash Log Via MavLink</button>
        <button className={dataflashcss.btn1}>Review a Log</button>
        <button className={dataflashcss.btn2}> Auto Analysis</button>
      </div>

      <div className={dataflashcss.childcontainer}>
        <button className={dataflashcss.btn3}>Create KML + gpx</button>
        <button className={dataflashcss.btn1}>Convert .bin to .log</button>
        <button className={dataflashcss.btn2}> Create Matlab File</button>
      </div>

      <div>
        <button className={dataflashcss.btn4}>Geo Reference Images</button>
      </div>
    </div>
  );
};

export default DataFlashLogs;
