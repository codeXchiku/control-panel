import React from "react";
import Actioncss from '../assets/Action.module.css'

const Actions = () => {
  return (
    <>
      <div style={{height: '14rem'}}>
        <div style={{ display:'flex', height:'2.5rem' ,marginBottom:'0.5rem'}}>

          <select
            className={Actioncss.selectbox}
            name=""
            id=""
          >
            <option value="">dpgle</option>
            <option value="">ofdpbi</option>
          </select>

          <button className={Actioncss.actionbtn}>Do Action</button>
          <button className={Actioncss.actionbtn}>Auto</button>
          <button className={Actioncss.actionbtn}>
            Set Home Alt
          </button>
          <div style={{display:'flex',flexWrap:'wrap'}}>
            <input
              type="number"
              value={"1200"}
              id=""
              className={Actioncss.inputbox}
            />
            <button className={Actioncss.btn1}>
              Change Speed
            </button>
          </div>
        </div>

        <div style={{display:'flex',height:'2.5rem',marginBottom:'0.5rem'}}>
          <select
            className={Actioncss.selectbox}
            name=""
            id=""
          >
            <option value="">dpgle</option>
            <option value="">ofdpbi</option>
          </select>
          <button className={Actioncss.actionbtn}>Do Action</button>
          <button className={Actioncss.actionbtn}>Auto</button>
          <button className={Actioncss.actionbtn}>
            Set Home Alt
          </button>
          <div style={{display:'flex',flexWrap:'wrap'}}>
            <input
              type="number"
              value={"1200"}
              id=""
              className={Actioncss.inputbox}
            />
            <button className={Actioncss.btn1}>
              Change Speed
            </button>
          </div>
        </div>

        <div style={{display:'flex',height:'2.5rem',marginBottom:'0.5rem'}}>
          <select
            className={Actioncss.selectbox}
            name=""
            id=""
          >
            <option value="">dpgle</option>
            <option value="">ofdpbi</option>
          </select>
          <button className={Actioncss.actionbtn}>Do Action</button>
          <button className={Actioncss.actionbtn}>Auto</button>
          <button className={Actioncss.actionbtn}>
            Set Home Alt
          </button>
          <div style={{display:'flex',flexWrap:'wrap'}}>
            <input
              type="number"
              value={"1200"}
              id=""
              className={Actioncss.inputbox}
            />
            <button className={Actioncss.btn1}>
              Change Speed
            </button>
          </div>
        </div>

        <div style={{display:'flex',height:'2.5rem',marginBottom:'0.5rem'}}>
          <select
            className={Actioncss.selectbox}
            name=""
            id=""
          >
            <option value="">dpgle</option>
            <option value="">ofdpbi</option>
          </select>
          <button className={Actioncss.actionbtn}>Do Action</button>
          <button className={Actioncss.actionbtn}>Auto</button>
          <button className={Actioncss.actionbtn}>
            Set Home Alt
          </button>
          <button className={Actioncss.actionbtn}>
            Set Home Alt
          </button>
        </div>

        <div style={{display:'flex',height:'2.5rem',marginLeft:'7rem'}}>
          <button className={Actioncss.actionbtn}>Do Action</button>
          <button className={Actioncss.actionbtn}>Auto</button>
          <button className={Actioncss.actionbtn}>
            Set Home Alt
          </button>
          <button className={Actioncss.actionbtn}>
            Set Home Alt
          </button>
        </div>
      </div>
    </>
  );
};

export default Actions;
