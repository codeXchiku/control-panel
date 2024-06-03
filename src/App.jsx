import Navbar from "./components/Navbar";
import Actions from "./pages/Actions";
import AuxFunction from "./pages/AuxFunction";
import DataFlashLogs from "./pages/DataFlashLogs";
import PayLoad from "./pages/PayLoad";
import PreFlight from "./pages/PreFlight";
import Quick from "./pages/Quick";
import Scripts from "./pages/Scripts";
import Servo from "./pages/Servo";
import TelemetryLogs from "./pages/TelemetryLogs";
import TransPonder from "./pages/TransPonder";

export default function App() {
  return (
    <>
    <Navbar/>
    {/* <TransPonder/> */}
    {/* <PreFlight/> */}
    {/* <Quick/> */}
    {/* <AuxFunction/> */}
    {/* <Scripts/> */}
    {/* <DataFlashLogs/> */}
    {/* <TelemetryLogs/> */}
    {/* <PayLoad/> */}
    {/* <Servo/> */}
    <Actions/>
    </>
  )
}