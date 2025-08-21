import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";


const App = () => (
  <Router>
    
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
