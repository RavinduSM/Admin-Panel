import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi/Navi';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing Routes and Route from react-router-dom
import Dashboard from './components/Dashboard/Dashboard';
import AddBooking from './components/Booking/AddBooking';
import AddDrivers from './components/Master/AddDrivers';
import Expiry from './components/Notification/Expiry';
import Heading from './components/Header/Heading';
import FillDetails from './components/Master/details/FillDetails';
import FillBooking from './components/Booking/Details/FillBooking';


function App() {
  
 
  return (
   <Router>
    
    
  <Heading />
   <Navi />
   <Routes>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="/addbooking" element={<AddBooking />}></Route>
    <Route path="/adddrivers" element={<AddDrivers />}></Route>
    <Route path="/expiry" element={<Expiry />}></Route>
    <Route path="/adddrivers/details" element={<FillDetails/>}></Route>
    <Route path="/addbooking/details" element={<FillBooking/>}></Route>
    
  </Routes>
    
   </Router>

  );
}

export default App;

