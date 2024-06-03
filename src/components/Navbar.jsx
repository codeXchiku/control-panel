import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center text-center bg-white justify-between text-black shrink-0 flex-none'>
    <div className=" py-3 w-14 border ">
    Quick
  </div>
  <div className=" w-14 py-3 border ">
    Action
  </div>
  <div className=" w-14 py-3 border ">
    Message
  </div>
  <div className=" w-14 py-3 border ">
    PreFlight
  </div>
  <div className=" w-14 py-3 border ">
    Gauges
  </div>
  <div className=" w-14 py-3 border ">
    Drone ID
  </div>
  <div className=" w-14 py-3 border ">
    Transponder
  </div>
  <div className=" w-14 py-3 border ">
    Status
  </div>
  <div className=" w-14 py-3 border ">
    Servo/Relay
  </div>
  <div className=" w-14 py-3 border ">
    Aux Function
  </div>
  <div className=" w-14 py-3 border ">
    Scripts
  </div>
  <div className=" w-14 py-3 border ">
    Payload Control
  </div>
  <div className=" w-14 py-3 border ">
    Telemetry Logs
  </div>
  <div className=" w-14 py-3 border ">
    Dataflash Logs
  </div>
    </nav>
    </>
  )
}

export default Navbar