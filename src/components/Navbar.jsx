import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white overflow-x-auto h-14 text-black
      ">
        <div className="flex items-center space-x-2">
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/">Quick</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/Actions">Action</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/Message">Message</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/PreFlight">PreFlight</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/Gauges">Gauges</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2" to="/DroneID">Drone ID</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/Transponder">Transponder</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/Status">Status</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/Servo">Servo/Relay</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2" to="/AuxFunction">Aux Function</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2 py-1" to="/Scripts">Scripts</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2" to="/Payload">Payload Control</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2" to="/TelemetryLogs">Telemetry Logs</NavLink>
          
          
            <NavLink className="focus:border-2 border-black text-xs px-2" to="/DataFlashLogs">Dataflash Logs</NavLink>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
