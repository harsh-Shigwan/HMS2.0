import React from 'react'
import "./App.css";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Patient from './pages/Patient';
import Appointment from './pages/Appointment';
import Doctor from './pages/Doctor';
import Inventory from './pages/Inventory';
import Pharmacy from './pages/Pharmacy';
import Sidebar from './components/Sidebar';
import Report from './pages/Report';
import OPD from './pages/OPD';
import IPD from './pages/IPD';
const App = () => {
  return (
   
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Patient />}></Route>
            <Route path="/Appointment" element={<Appointment />}></Route>
            <Route path="/Doctor" element={<Doctor />}></Route>
            <Route path="/Inventory" element={<Inventory />}></Route>
            <Route path="/Pharmacy" element={<Pharmacy />}></Route>
            <Route path="/Report" element={<Report />}></Route>
            <Route path="/Appointment/OPD" element={<OPD />}></Route>
            <Route path="/Appointment/IPD" element={<IPD />}></Route>
          </Routes>
        </Sidebar>
      </Router>
  
  );
}

export default App