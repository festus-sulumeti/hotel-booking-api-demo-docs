import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-500">Hotel Booking API</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            A lightweight API for managing hotels, rooms, bookings, and payments built with Node.js & Express.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-500">Quick Links</h3>
          <ul className="text-gray-600 text-sm sm:text-base space-y-2">
            <li>
              <Link to="/docs" className="hover:text-green-500 transition">
                API Docs
              </Link>
            </li>
            <li>
              <Link to="/auth" className="hover:text-green-500 transition">
                Authentication
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-green-500 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-500">Contact Us</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Email: <a href="mailto:support@hotelapi.com" className="hover:text-green-500 transition">support@hotelapi.com</a>
          </p>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Phone: <a href="tel:+1234567890" className="hover:text-green-500 transition">+1 (234) 567-890</a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm sm:text-base">
        &copy; 2025 Hotel Booking API. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
