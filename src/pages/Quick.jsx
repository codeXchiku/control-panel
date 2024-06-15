import React from "react";
import quickcss from '../assets/Quick.module.css'

const Quick = () => {
  return (
    <>
      <div style={{height:'14rem'}} >
        <div className={quickcss.childcontainer}>
          <div>
            <div className={quickcss.text}>Altitude(m)</div>
            <p className={quickcss.alttext}>0.00</p>
          </div>

          <div>
            <div className={quickcss.text}>Ground Speed(m/s)</div>
            <p className={quickcss.grotext}>0.00</p>
          </div>
        </div>

        <div className={quickcss.childcontainer}>
          <div>
            <div className={quickcss.text}>Dist To WP</div>
            <p className={quickcss.disttext}>0.00</p>
          </div>

          <div>
            <div className={quickcss.text}>Yaw(deg)</div>
            <p className={quickcss.yawtext}>0.00</p>
          </div>
        </div>

        <div className={quickcss.childcontainer}>
          <div>
            <div className={quickcss.text}>Vertical Speed(m/s)</div>
            <p className={quickcss.vertext}>0.00</p>
          </div>

          <div>
            <div className={quickcss.text}>DistToMAV</div>
            <p className={quickcss.distext}>0.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quick;
