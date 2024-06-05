import React from "react";

const DroneID = () => {

  const content1 = ()=>{
    <p className="bg-red-500">chiku is a good boy</p>
  }
  return (
    <>
      <div>
        <fieldset className="border border-red-500 h-32 w-4/12 ml-3">
          <legend className="ml-3">GCS GPS</legend>
          <div className="flex">
            <select
              name=""
              id=""
              className="mt-3 h-8 w-32 px-5 mx-3 bg-gray-400"
            >
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <select
              name=""
              id=""
              className="mt-3 h-8 w-32 px-5 mr-3 bg-gray-400"
            >
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <button className="bg-lime-500 h-8 px-1 mt-3">
              Connect Base GPS
            </button>
          </div>
          <div className="flex ml-2 justify-end">
            <p className="mr-60">Not Yet Started</p>
            <input type="checkbox" name="" id="" className="mr-1" />
            <p className="mr-20">Auto</p>
          </div>
        </fieldset>

        <div className="flex h-24 w-4/12 ml-3 justify-between mt-3">
          <div className="ml-3">
            <ul>
              <li className="flex items-center text-lg">
                <svg
                  className="h-4 w-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="7" cx="7" cy="7" fill="gray" />
                </svg>
                Remote ID
              </li>
            </ul>
            <p className="ml-4">{"{Loading....}"}</p>
          </div>

          <div className="border border-green-500 h-20 px-4">
            <ul>
              <li className="flex items-center text-lg">
                <svg
                  className="h-4 w-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="7" cx="7" cy="7" fill="gray" />
                </svg>
                RID Comms
              </li>
            </ul>
            <ul className="flex">
              <li className="flex items-center text-lg mr-3">
                <svg
                  className="h-4 w-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="7" cx="7" cy="7" fill="#d4af37" />
                </svg>
                GCS GPS
              </li>
              <li className="flex items-center text-lg">
                <svg
                  className="h-4 w-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="7" cx="7" cy="7" fill="gray" />
                </svg>
                ARM Status
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex ml-3">
            <button className="bg-lime-400 mr-1" onClick={content1}>chiku</button>
            <button className="bg-lime-400 mr-1">biku</button>
            <button className="bg-lime-400 mr-1">raja</button>
          </div>
          <div className="ml-3 border border-blue-400"></div>
        </div>
      </div>
    </>
  );
};

export default DroneID;
