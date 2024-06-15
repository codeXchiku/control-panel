import React from "react";
import { NavLink } from "react-router-dom";
import '../assets/Nav.css'

const Navbar = () => {
  return (
    <>
      <nav
        className="navcontainer1">
        <div className="navcontainer2">

          <NavLink
            className=" navchild"
            to="/"
          >
            Quick
          </NavLink>

          <NavLink
            className="navchild"
            to="/Actions"
          >
            Action
          </NavLink>

          <NavLink
            className="navchild"
            to="/Message"
          >
            Message
          </NavLink>

          <NavLink
            className="navchild"
            to="/PreFlight"
          >
            PreFlight
          </NavLink>

          <NavLink
            className="navchild"
            to="/Gauges"
          >
            Gauges
          </NavLink>

          <NavLink
            className="navchild"
            to="/DroneID"
          >
            Drone ID
          </NavLink>

          <NavLink
            className="navchild"
            to="/Transponder"
          >
            Transponder
          </NavLink>

          <NavLink
            className="navchild"
            to="/Status"
          >
            Status
          </NavLink>

          <NavLink
            className="navchild"
            to="/Servo"
          >
            Servo/Relay
          </NavLink>

          <NavLink
            className="navchild"
            to="/AuxFunction"
          >
            Aux Function
          </NavLink>

          <NavLink
            className="navchild"
            to="/Scripts"
          >
            Scripts
          </NavLink>

          <NavLink
            className="navchild"
            to="/Payload"
          >
            Payload Control
          </NavLink>

          <NavLink
            className="navchild"
            to="/TelemetryLogs"
          >
            Telemetry Logs
          </NavLink>

          <NavLink
            className="navchild"
            to="/DataFlashLogs"
          >
            Dataflash Logs
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
