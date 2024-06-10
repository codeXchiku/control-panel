import React from "react";
import Slider from "../components/Slider";

const PayLoad = () => {
  return (
    <>
      <div className="flex h-56 mb-2">
        <div className="grid ">
          <fieldset className="border border-red-500 ml-3 h-40">
            <legend className="ml-2">Tilt</legend>
            <div className="flex">
              <input className="bg-gray-400 w-16 h-5 ml-2" type="text" />
              <div className="rotate-90 h-10 w-32 mt-8  text-center">
                <Slider />
              </div>
            </div>
          </fieldset>
          <button className="bg-lime-500 w-14 px-2 text-xs mt-2 ml-3 ">
            Reset Position
          </button>
        </div>

        <div className="grid">
          <fieldset className="border border-red-500 ml-3">
            <legend className="ml-3">Pan</legend>
            <div className="flex text-center">
              <input className="bg-gray-400 w-16 h-5 ml-2" type="text" />
              <Slider />
            </div>
          </fieldset>

          <fieldset className="border border-red-500 ml-3">
            <legend className="ml-3">Roll</legend>
            <div className="flex text-center">
              <input className="bg-gray-400 w-16 h-5 ml-2" type="text" />
              <Slider />
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default PayLoad;
