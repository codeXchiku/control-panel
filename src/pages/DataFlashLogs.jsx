import React from "react";

const DataFlashLogs = () => {
  return (
    <div className="grid">
      <div className="flex mb-2">
        <button className="bg-green-400 mr-2 w-36 text-sm py-2">Download DataFlash Log Via MavLink</button>
        <button className="bg-green-400 mr-8 w-28">Review a Log</button>
        <button className="bg-green-400  w-28"> Auto Analysis</button>
      </div>

      <div className="flex mb-2">
        <button className="bg-green-400 mr-2 w-36 py-2">Create KML + gpx</button>
        <button className="bg-green-400 mr-8 w-28">Convert .bin to .log</button>
        <button className="bg-green-400 w-28"> Create Matlab File</button>
      </div>

      <div>
        <button className="bg-green-400 mr-2 w-36">Geo Reference Images</button>
      </div>
    </div>
  );
};

export default DataFlashLogs;
