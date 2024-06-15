import React from "react";
import preflightcss from '../assets/Preflight.module.css'

const PreFlight = () => {
  return (
    <>
      <div style={{height:'14rem'}}>
        <div style={{display:"flex",justifyContent:"flex-end"}}>
          <button className={preflightcss.btn}>Edit</button>
        </div>

        <div style={{color:"white"}}>
          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>
            <div>
              <p>{`0 >= 3`}</p>
            </div>
            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>

          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>
            <div>
              <p>0 Sats</p>
            </div>
            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>

          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>
            <div>
              <p>0%</p>
            </div>
            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>
          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>
            <div>
              <p>0 V</p>
            </div>
            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>

          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>
            <div>
              <p>Unknown</p>
            </div>
            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>

          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>
            <div>
              <p>{`0 < 5m`}</p>
            </div>
            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>
          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>

            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>
          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>

            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>
          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>

            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>
          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>

            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>
          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>

            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>

          <div className={preflightcss.childcontainer}>
            <div style={{marginLeft:'0.5rem'}}>Verify Gps</div>

            <div>
              <input style={{marginRight:'1.5rem'}} type="checkbox" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreFlight;
