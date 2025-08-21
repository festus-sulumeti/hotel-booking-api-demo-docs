import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <aside className="w-64 p-4 bg-white text-accent border-r">
    <ul className="space-y-2">
      <li><Link to="/structure">Project Structure</Link></li>
      <li><Link to="/auth">Auth</Link></li>
      <li><Link to="/hotels">Hotels</Link></li>
      <li><Link to="/rooms">Rooms</Link></li>
      <li><Link to="/bookings">Bookings</Link></li>
      <li><Link to="/payments">Payments</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
