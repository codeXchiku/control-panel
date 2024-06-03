import React from "react";

const TransPonder = () => {
  return (
    <>
      <div className="flex ">
        <div className="grid mr-2">
          <button className="bg-green-400 mb-2 rounded-md border-4 border-black ">
            STBY
          </button>
          <button className="bg-green-400 mb-2 rounded-md border-4 border-black">
            ON
          </button>
          <button className="bg-green-400 mb-2 rounded-md border-4 border-black">
            ALT
          </button>
          <button className="bg-green-400 mb-2 rounded-md border-4 border-black p-2">
            IDENT
          </button>
        </div>
<div className="grid">
        <div className="flex h-1/4">
          <div className="mr-2">
            <div className="flex mb-2">
              <p className="mr-2">Flight ID</p>
              <input className="bg-gray-400 w-24" type="text" name="" id="" />
            </div>

            <div className="flex mb-2">
              <p className="mr-2">Flight ID</p>
              <input
                className="bg-gray-400 py-2 w-24"
                type="number"
                name=""
                id=""
              />
            </div>

            <div className="flex mb-2">
              <p className="mr-2">Flight ID</p>
              <input className="bg-gray-400 w-24" type="text" name="" id="" />
            </div>

            <div className="flex mb-2">
              <p className="mr-2">Flight ID</p>
              <input className="bg-gray-400 w-24" type="text" name="" id="" />
            </div>
          </div>

          <div className="bg-gray-400 h-36 px-2">
            <div className="flex">
              <input className="mr-2" type="checkbox" name="" id="" />
              <p>Maint. Req.</p>
            </div>

            <div className="flex">
              <input className="mr-2" type="checkbox" name="" id="" />
              <p>Maint. Req.</p>
            </div>

            <div className="flex">
              <input className="mr-2" type="checkbox" name="" id="" />
              <p>Maint. Req.</p>
            </div>

            <div className="flex">
              <input className="mr-2" type="checkbox" name="" id="" />
              <p>Maint. Req.</p>
            </div>

            <div className="flex">
              <input className="mr-2" type="checkbox" name="" id="" />
              <p>Maint. Req.</p>
            </div>
          </div>
        </div>

        <div>
          <button className="bg-green-400 mb-2 rounded-md border-4 border-black px-16 mt-2">
            connect to transponder
          </button>
        </div>
</div>              
      </div>
    </>
  );
};

export default TransPonder;
