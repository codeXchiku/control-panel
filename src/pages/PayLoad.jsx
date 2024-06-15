import React from "react";
import Slider from "../components/Slider";
import payloadcss from '../assets/Payload.module.css'

const PayLoad = () => {
  return (
    <>
      <div style={{display:"flex",height:'14rem',marginBottom:'0.5rem'}}>
        <div style={{display:'grid'}}>
          <fieldset style={{height:'10rem'}} className={payloadcss.fieldsetbox}>
            <legend style={{marginLeft:'0.5rem'}}>Tilt</legend>
            <div style={{display:"flex"}}>
              <input className={payloadcss.inputbox} type="text" />
              <div className={payloadcss.slidercontainer}>
                <Slider />
              </div>
            </div>
          </fieldset>
          <button className={payloadcss.btn}>
            Reset Position
          </button>
        </div>

        <div style={{display:"grid"}}>
          <fieldset className={payloadcss.fieldsetbox}>
            <legend style={{marginLeft:'0.75rem'}}>Pan</legend>
            <div style={{display:"flex",textAlign:'center'}}>
              <input className={payloadcss.inputbox} type="text" />
              <Slider />
            </div>
          </fieldset>

          <fieldset className={payloadcss.fieldsetbox}>
            <legend style={{marginLeft:'0.75rem'}}>Roll</legend>
            <div style={{display:"flex",textAlign:'center'}}>
              <input className={payloadcss.inputbox} type="text" />
              <Slider />
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default PayLoad;
