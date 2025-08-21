import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


const App = () => (
  <Router>
    <Navbar />
    <div className="flex">
      {/* <Sidebar /> Optional */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Add routes for Auth, Hotels, Rooms, Bookings, Payments */}
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
