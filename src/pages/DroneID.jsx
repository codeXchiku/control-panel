import React, { useState } from "react";
import dronecss from '../assets/Drone.module.css'

const DroneID = () => {
  const [content, setContent] = useState(null);

  const handleButtonClick = (buttonId) => {
    // Set content based on button ID
    switch (buttonId) {
      case 'button1':
        setContent(
          <div>
        <div className={dronecss.inputcontainerbtn1}>
          <p >RID Armed Status</p>
          <input type="text" style={{backgroundColor:'rgb(156 163 175)'}}/>
        </div>
        <textarea className={dronecss.textareabtn1} name="message" rows="7" cols="60"></textarea>
         </div>
        );
        break;


      case 'button2':
        setContent(
        <div>
          <div className={dronecss.inputcontainer}>
            <p>UAS ID</p>
            <input className={dronecss.inputbox} type="text" />
          </div>
          <div className={dronecss.inputcontainer}>
            <p>UAS ID Type</p>
            <select className={dronecss.inputbox} name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>
          <div className={dronecss.inputcontainer}>
          <p>UA Type</p>
            <select className={dronecss.inputbox} name="" id="">
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
            <div className={dronecss.inputcontainer}>
            <p>UAS ID</p>
            <input className={dronecss.inputbox} type="text" />
          </div>

          <div className={dronecss.selectcontainer1btn3}>
            <p>UAS ID Type</p>
            <select className={dronecss.inputbox} name="" id="">
              <option value="">1</option>
              <option value="">2</option>
            </select>
          </div>

          <p style={{marginLeft:'0.75rem'}}>self Id:</p>

          <div className={dronecss.inputcontainer}>
            <p>UAS ID</p>
            <input className={dronecss.inputbox} type="text" />
          </div>

          <div className={dronecss.inputcontainer}>
            <p>UAS ID Type</p>
            <select className={dronecss.inputbox} name="" id="">
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
      <div style={{height:'14rem'}}>
        <fieldset className={dronecss.fieldbox}>
          <legend style={{marginLeft:'0.75rem'}}>GCS GPS</legend>
          <div style={{display:'flex'}}>
            <select
              name=""
              id=""
              className={dronecss.selectbox1}
            >
              <option value="">1</option>
              <option value="">2</option>
            </select>

            <select
              name=""
              id=""
              className={dronecss.selectbox2}
            >
              <option value="">1</option>
              <option value="">2</option>
            </select>

            <button className={dronecss.selectboxbtn}>
              Connect Base GPS
            </button>
          </div>
          <div className={dronecss.selectboxcontainer}>
            <p >Not Yet Started</p>
            <div style={{display:'flex',marginRight:'7rem'}}>
            <input type="checkbox" name="" id=""style={{marginRight:'0.25rem'}} />
            <p >Auto</p>
            </div>
          </div>
        </fieldset>

        <div className={dronecss.childcontainer}>
          <div style={{marginLeft:'0.75rem'}}>
            <ul>
              <li className={dronecss.list}>
                <svg
                  className={dronecss.svgcrcl}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="7" cx="7" cy="7" fill="gray" />
                </svg>
                Remote ID
              </li>
            </ul>
            <p style={{marginLeft:'1rem'}}>{"{Loading....}"}</p>
          </div>

          <div className={dronecss.childcontainer1}>
            <ul>
              <li className={dronecss.list}>
                <svg
                  className={dronecss.svgcrcl}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="7" cx="7" cy="7" fill="gray" />
                </svg>
                RID Comms
              </li>
            </ul>
            <ul style={{display:'flex'}}>
              <li className={dronecss.list1}>
                <svg
                  className={dronecss.svgcrcl}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="7" cx="7" cy="7" fill="#d4af37" />
                </svg>
                GCS GPS
              </li>
              <li className={dronecss.list}>
                <svg
                  className={dronecss.svgcrcl}
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
          <div style={{display:'flex',marginLeft:'0.75rem'}}>
            <button className={dronecss.btn} onClick={() => handleButtonClick('button1')}>Status</button>
            <button className={dronecss.btn} onClick={() => handleButtonClick('button2')}>UAS ID</button>
            <button className={dronecss.btn} onClick={() => handleButtonClick('button3')}>Operations</button>
          </div>
          <div className={dronecss.contentcontainer}>{content}</div>
        </div>
      </div>
    </>
  );
};

export default DroneID;
