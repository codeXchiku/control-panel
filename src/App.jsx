import { BrowserRouter, Route, Routes } from "react-router-dom";

import Gyro from "./components/Gyro";
import Navbar from "./components/Navbar";
import Actions from "./pages/Actions";
import AuxFunction from "./pages/AuxFunction";
import DataFlashLogs from "./pages/DataFlashLogs";
import DroneID from "./pages/DroneID";
import Gauges from "./pages/Gauges";
import PayLoad from "./pages/PayLoad";
import PreFlight from "./pages/PreFlight";
import Quick from "./pages/Quick";
import Scripts from "./pages/Scripts";
import Servo from "./pages/Servo";
import TelemetryLogs from "./pages/TelemetryLogs";
import TransPonder from "./pages/TransPonder";
import Message from "./pages/Message";
import Status from "./pages/Status";

export default function App() {
  return (
    <>
    
        <Gyro/>
        
    <BrowserRouter>
    <Navbar/>
    <div class="overflow-y-auto pt-3 bg-black text-white ">
      <Routes>
        <Route path="/" element={<Quick/>}/>
        <Route path="/PayLoad" element={<PayLoad/>}/>
        <Route path="/TransPonder" element={<TransPonder/>}/>
        <Route path="/PreFlight" element={<PreFlight/>}/>
        <Route path="/AuxFunction" element={<AuxFunction/>}/>
        <Route path="/Scripts" element={<Scripts/>}/>
        <Route path="/DataFlashLogs" element={<DataFlashLogs/>}/>
        <Route path="/TelemetryLogs" element={<TelemetryLogs/>}/>
        <Route path="/Servo" element={<Servo/>}/>
        <Route path="/Actions" element={<Actions/>}/>
        <Route path="/Gauges" element={<Gauges/>}/>
        <Route path="/DroneID" element={<DroneID/>}/>
        <Route path="/Message" element={<Message/>}/>
        <Route path="/Status" element={<Status/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    
    </>
  )
}