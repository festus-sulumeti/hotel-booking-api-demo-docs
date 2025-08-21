import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-secondary p-4 text-white flex justify-between">
    <h1 className="font-bold text-xl">Hotel API Docs</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/structure">Project</Link>
      <Link to="/auth">Auth</Link>
      <Link to="/hotels">Hotels</Link>
      <Link to="/rooms">Rooms</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/payments">Payments</Link>
    </div>
  </nav>
);

export default Navbar;
