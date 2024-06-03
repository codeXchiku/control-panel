import React, { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="w-36">
        <input type="range" min={0} max="100" className="range" step="5" value={value} onChange={handleChange} />
        <div className="w-full flex justify-between text-xs px-3.5  ">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>
    </>
  );
};

export default Slider;
