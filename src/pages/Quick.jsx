import React from "react";

const Quick = () => {
  return (
    <>
      <div className="h-56">
        <div className="flex justify-around ">
          <div>
            <div className="font-bold text-center">Altitude(m)</div>
            <p className="text-8xl text-purple-400">0.00</p>
          </div>

          <div>
            <div className="font-bold text-center">Ground Speed(m/s)</div>
            <p className="text-8xl text-orange-400">0.00</p>
          </div>
        </div>

        <div className="flex justify-around">
          <div>
            <div className="font-bold text-center">Dist To WP</div>
            <p className="text-8xl text-pink-400">0.00</p>
          </div>

          <div>
            <div className="font-bold text-center">Yaw(deg)</div>
            <p className="text-8xl text-green-400">0.00</p>
          </div>
        </div>

        <div className="flex justify-around">
          <div>
            <div className="font-bold text-center">Vertical Speed(m/s)</div>
            <p className="text-8xl text-yellow-400 ">0.00</p>
          </div>

          <div>
            <div className="font-bold text-center">DistToMAV</div>
            <p className="text-8xl text-sky-400">0.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quick;
