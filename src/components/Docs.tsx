import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Docs = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white py-32 px-6 sm:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          🧭 API Documentation
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Full reference for the Hotel Booking API. Learn about endpoints, request bodies, responses, and authentication.
        </p>
      </section>

      {/* Example Endpoints */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-2">Health Check</h2>
            <pre className="bg-white p-4 rounded border border-gray-200">{`GET /api/health`}</pre>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Register & Login</h2>
            <pre className="bg-white p-4 rounded border border-gray-200">{`POST /api/auth/register`}</pre>
            <pre className="bg-white p-4 rounded border border-gray-200">{`POST /api/auth/login`}</pre>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Hotels & Rooms</h2>
            <pre className="bg-white p-4 rounded border border-gray-200">{`GET /api/hotels`}</pre>
            <pre className="bg-white p-4 rounded border border-gray-200">{`GET /api/hotels/:hotelId/rooms`}</pre>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Bookings & Payments</h2>
            <pre className="bg-white p-4 rounded border border-gray-200">{`POST /api/bookings`}</pre>
            <pre className="bg-white p-4 rounded border border-gray-200">{`POST /api/payments/initiate`}</pre>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Docs;
