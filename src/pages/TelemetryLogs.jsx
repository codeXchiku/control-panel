import React from "react";
import Slider from "../components/Slider";

const TelemetryLogs = () => {
  return (
    <>
      <div className="flex h-56">
        <div className="grid mr-6 w-24 h-36">
          <button className="bg-green-400 mb-2">Load Log</button>

          <button className="bg-green-400 mb-2">Play</button>

          <button className="bg-green-400 text-sm">Tlog {'>'} Kml .or Graph</button>
        </div>

        <div className="grid w-32 text-center mt-10 h-36 ">
          <div className="mb-3">
            <Slider />
          </div>
          <p>speed</p>
          <div className="flex flex-wrap">
          <button className="bg-green-400 mr-2 px-1 mb-2 text-sm">0.1</button>
          <button className="bg-green-400 mr-2 px-1 mb-2 text-sm">0.25</button>
          <button className="bg-green-400 mr-2 px-1 mb-2 text-sm">0.5</button>
          <button className="bg-green-400 mr-2 px-1 mb-2 text-sm">1x</button>
          <button className="bg-green-400 mr-2 px-1 mb-2 text-sm">2x</button>
          <button className="bg-green-400 mr-2 px-1 mb-2 text-sm">5x</button>
          <button className="bg-green-400 mr-2 px-1 mb-2 text-sm">10x</button>
          </div>
        </div>

        <div className="grid ml-6">
          <p className="mt-5">0.00%</p>
          <p className="mb-16">x 1.0</p>
        </div>
      </div>
    </>
  );
};

export default TelemetryLogs;
