import React, { useState } from "react";

const DroneID = () => {
  const [content, setContent] = useState(null);

  const handleButtonClick = (buttonId) => {
    // Set content based on button ID
    switch (buttonId) {
      case 'button1':
        setContent(
          <div>
        <div className="flex justify-between mt-1 mx-4">
          <p >RID Armed Status</p>
          <input type="text" className="bg-gray-400"/>
        </div>
        <textarea className="ml-1 mt-2 text-black" name="message" rows="7" cols="60"></textarea>
         </div>
        );
        break;
      case 'button2':
        setContent(
        <div>
          <div className="flex justify-between mt-4 ml-3 mr-4">
            <p>UAS ID</p>
            <input className="bg-gray-400 w-56 " type="text" />
          </div>
          <div className="flex justify-between mt-4 ml-3 mr-4">
            <p>UAS ID Type</p>
            <select className="bg-gray-400 w-56 " name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div className="flex justify-between mt-4 ml-3 mr-4">
          <p>UA Type</p>
            <select className="bg-gray-400 w-56" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
        </div>
      );
        break;
      case 'button3':
        setContent(
          <div>
            <div className="flex justify-between mt-4 ml-3 mr-4">
            <p>UAS ID</p>
            <input className="bg-gray-400 w-56 " type="text" />
          </div>

          <div className="flex justify-between mt-4 ml-3 mr-4 mb-2">
            <p>UAS ID Type</p>
            <select className="bg-gray-400 w-56 " name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>

          <p className="ml-3">self Id:</p>

          <div className="flex justify-between mt-2 ml-3 mr-4">
            <p>UAS ID</p>
            <input className="bg-gray-400 w-56 " type="text" />
          </div>

          <div className="flex justify-between mt-4 ml-3 mr-4">
            <p>UAS ID Type</p>
            <select className="bg-gray-400 w-56 " name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>

          </div>
        );
        break;
      default:
        setContent(null);
    }
  };


  return (
    <>
      <div className="h-56 mb-2">
        <fieldset className="border border-red-500 h-28 w-30 mx-4">
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
            <button className="bg-lime-500 h-8 px-1 mt-3 text-xs">
              Connect Base GPS
            </button>
          </div>
          <div className="flex ml-4 justify-between">
            <p className="">Not Yet Started</p>
            <div className="flex mr-28">
            <input type="checkbox" name="" id="" className="mr-1" />
            <p className="">Auto</p>
            </div>
          </div>
        </fieldset>

        <div className="flex h-24 w-30 mx-4 justify-between mt-3">
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
            <button className="bg-lime-400 mr-1" onClick={() => handleButtonClick('button1')}>Status</button>
            <button className="bg-lime-400 mr-1" onClick={() => handleButtonClick('button2')}>UAS ID</button>
            <button className="bg-lime-400 mr-1" onClick={() => handleButtonClick('button3')}>Operations</button>
          </div>
          <div className="mx-3 border border-blue-400 w-30 h-52">{content}</div>
        </div>
      </div>
    </>
  );
};

export default DroneID;
