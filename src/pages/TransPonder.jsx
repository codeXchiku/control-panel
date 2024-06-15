import React from "react";
import transpondercss from '../assets/Transponder.module.css'

const TransPonder = () => {
  return (
    <>
      <div style={{display:"flex"}}>
        <div className={transpondercss.btncontainer}>
          <button className={transpondercss.btn}>
            STBY
          </button>
          <button className={transpondercss.btn}>
            ON
          </button>
          <button className={transpondercss.btn}>
            ALT
          </button>
          <button style={{padding:' 0.5rem'}} className={transpondercss.btn}>
            IDENT
          </button>
        </div>
        <div style={{display:"grid"}}>
          <div style={{display:"flex"}}>

            <div style={{marginRight:'0.5rem'}}>
              <div style={{display:'flex',marginBottom:'0.5rem'}}>
                <p style={{marginRight:'0.5rem'}}>Flight ID</p>
                <input className={transpondercss.inputbox} type="text" name="" id="" />
              </div>

              <div style={{display:'flex',marginBottom:'0.5rem'}}>
                <p style={{marginRight:'0.5rem'}}>Flight ID</p>
                <input
                  className={transpondercss.inputbox2}
                  type="number"
                  name=""
                  id=""
                />
              </div>

              <div style={{display:'flex',marginBottom:'0.5rem'}}>
                <p style={{marginRight:'0.5rem'}}>Flight ID</p>
                <input className={transpondercss.inputbox} type="text" name="" id="" />
              </div>

              <div style={{display:'flex',marginBottom:'0.5rem'}}>
                <p style={{marginRight:'0.5rem'}}>Flight ID</p>
                <input className={transpondercss.inputbox} type="text" name="" id="" />
              </div>
            </div>

            <div className="bg-gray-400 h-36 px-2 text-black">
              <div style={{display:"flex"}}>
                <input style={{marginRight:'0.5rem'}} type="checkbox" name="" id="" />
                <p>Maint. Req.</p>
              </div>

              <div style={{display:"flex"}}>
                <input style={{marginRight:'0.5rem'}} type="checkbox" name="" id="" />
                <p>Maint. Req.</p>
              </div>

              <div style={{display:"flex"}}>
                <input style={{marginRight:'0.5rem'}} type="checkbox" name="" id="" />
                <p>Maint. Req.</p>
              </div>

              <div style={{display:"flex"}}>
                <input style={{marginRight:'0.5rem'}} type="checkbox" name="" id="" />
                <p>Maint. Req.</p>
              </div>

              <div style={{display:"flex"}}>
                <input style={{marginRight:'0.5rem'}} type="checkbox" name="" id="" />
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
