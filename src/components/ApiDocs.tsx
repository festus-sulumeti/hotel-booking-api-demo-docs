import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ApiDocs = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white text-black py-32 px-6 sm:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          🧭 API Documentation
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Full reference for the Hotel Booking API. Learn endpoints, request bodies, responses, and authentication details.
        </p>
      </section>

      {/* Endpoints Section */}
      <section className="bg-white text-black py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Health Check */}
          <div id="health">
            <h2 className="text-2xl font-bold mb-3">🧭 API Endpoints Health</h2>
            <p className="mb-2">Check API health:</p>
            <pre className="bg-gray-100 p-4 rounded mb-2">{`GET /api/health`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`{
  "healthy": true,
  "time": "2025-08-21T12:00:00.000Z"
}`}</pre>
          </div>

          {/* Auth */}
          <div id="auth">
            <h2 className="text-2xl font-bold mb-3">Auth Register & Login</h2>

            <p className="font-semibold mb-1">Register</p>
            <pre className="bg-gray-100 p-4 rounded mb-2">{`POST /api/auth/register`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 mb-2">{`{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "password123"
}`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`{
  "message": "User registered successfully",
  "token": "jwt_token_here"
}`}</pre>

            <p className="font-semibold mt-6 mb-1">Login</p>
            <pre className="bg-gray-100 p-4 rounded mb-2">{`POST /api/auth/login`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`{
  "message": "Login successful",
  "token": "jwt_token_here"
}`}</pre>
          </div>

          {/* Hotels */}
          <div id="hotels">
            <h2 className="text-2xl font-bold mb-3">Hotels</h2>
            <p className="font-semibold mb-1">List Hotels</p>
            <pre className="bg-gray-100 p-4 rounded mb-2">{`GET /api/hotels`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`[
  { "id": 1, "name": "Hilton Nairobi", "location": "Nairobi", "rating": 4.5 },
  { "id": 2, "name": "Serena Hotel", "location": "Mombasa", "rating": 4.7 }
]`}</pre>
          </div>

          {/* Rooms */}
          <div id="rooms">
            <h2 className="text-2xl font-bold mb-3">Rooms</h2>
            <p className="font-semibold mb-1">List Rooms for a Hotel</p>
            <pre className="bg-gray-100 p-4 rounded mb-2">{`GET /api/hotels/:hotelId/rooms`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`[
  { "id": 101, "type": "Deluxe", "price": 120, "available": true },
  { "id": 102, "type": "Standard", "price": 80, "available": false }
]`}</pre>
          </div>

          {/* Bookings */}
          <div id="bookings">
            <h2 className="text-2xl font-bold mb-3">Bookings</h2>
            <p className="font-semibold mb-1">Create Booking</p>
            <pre className="bg-gray-100 p-4 rounded mb-2">{`POST /api/bookings`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`{
  "hotelId": 1,
  "roomId": 101,
  "checkIn": "2025-09-01",
  "checkOut": "2025-09-05"
}`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`{
  "id": 1,
  "status": "pending_payment",
  "hotelId": 1,
  "roomId": 101,
  "checkIn": "2025-09-01",
  "checkOut": "2025-09-05"
}`}</pre>
          </div>

          {/* Payments */}
          <div id="payments">
            <h2 className="text-2xl font-bold mb-3">Payments</h2>
            <p className="font-semibold mb-1">Initiate Payment</p>
            <pre className="bg-gray-100 p-4 rounded mb-2">{`POST /api/payments/initiate`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`{
  "bookingId": 1,
  "method": "mpesa",
  "amount": 480
}`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 mb-2">{`{
  "paymentId": "pay_123",
  "status": "processing",
  "redirectUrl": "https://sandbox.mpesa.com/checkout/pay_123"
}`}</pre>

            <p className="font-semibold mb-1">Webhook</p>
            <pre className="bg-gray-100 p-4 rounded mb-2">{`POST /api/payments/webhook`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`{
  "paymentId": "pay_123",
  "status": "confirmed"
}`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200">{`{
  "message": "Payment updated and booking confirmed"
}`}</pre>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ApiDocs;
