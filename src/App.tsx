import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ApiDocs from "./components/ApiDocs";


const App = () => (
  <Router>
    
    <div className="flex">
      {/* <Sidebar /> Optional */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          
          {/* Add routes for Auth, Hotels, Rooms, Bookings, Payments */}
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
