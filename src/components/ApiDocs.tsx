
import Navbar from "./Navbar";
import Footer from "./Footer";

const ApiDocs = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white text-black py-20 sm:py-32 px-6 sm:px-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
          🧭 API Documentation
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
          Full reference for the Hotel Booking API. Learn endpoints, request bodies, responses, and authentication details.
        </p>
      </section>

      {/* Endpoints Section */}
      <section className="bg-white text-black py-16 sm:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Health Check */}
          <div id="health">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">🧭 API Endpoints Health</h2>
            <p className="mb-2 text-sm sm:text-base">Check API health:</p>
            <pre className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto">{`GET /api/health`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`{
  "healthy": true,
  "time": "2025-08-21T12:00:00.000Z"
}`}</pre>
          </div>

          {/* Auth */}
          <div id="auth">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Auth Register & Login</h2>

            <p className="font-semibold text-sm sm:text-base mb-1">Register</p>
            <pre className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto">{`POST /api/auth/register`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 mb-2 overflow-x-auto">{`{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "password123"
}`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 mb-4 overflow-x-auto">{`{
  "message": "User registered successfully",
  "token": "jwt_token_here"
}`}</pre>

            <p className="font-semibold text-sm sm:text-base mb-1">Login</p>
            <pre className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto">{`POST /api/auth/login`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`{
  "message": "Login successful",
  "token": "jwt_token_here"
}`}</pre>
          </div>

          {/* Hotels */}
          <div id="hotels">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Hotels</h2>
            <p className="font-semibold text-sm sm:text-base mb-1">List Hotels</p>
            <pre className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto">{`GET /api/hotels`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`[
  { "id": 1, "name": "Hilton Nairobi", "location": "Nairobi", "rating": 4.5 },
  { "id": 2, "name": "Serena Hotel", "location": "Mombasa", "rating": 4.7 }
]`}</pre>
          </div>

          {/* Rooms */}
          <div id="rooms">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Rooms</h2>
            <p className="font-semibold text-sm sm:text-base mb-1">List Rooms for a Hotel</p>
            <pre className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto">{`GET /api/hotels/:hotelId/rooms`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`[
  { "id": 101, "type": "Deluxe", "price": 120, "available": true },
  { "id": 102, "type": "Standard", "price": 80, "available": false }
]`}</pre>
          </div>

          {/* Bookings */}
          <div id="bookings">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Bookings</h2>
            <p className="font-semibold text-sm sm:text-base mb-1">Create Booking</p>
            <pre className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto">{`POST /api/bookings`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`{
  "hotelId": 1,
  "roomId": 101,
  "checkIn": "2025-09-01",
  "checkOut": "2025-09-05"
}`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`{
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
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Payments</h2>
            <p className="font-semibold text-sm sm:text-base mb-1">Initiate Payment</p>
            <pre className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto">{`POST /api/payments/initiate`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`{
  "bookingId": 1,
  "method": "mpesa",
  "amount": 480
}`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 mb-2 overflow-x-auto">{`{
  "paymentId": "pay_123",
  "status": "processing",
  "redirectUrl": "https://sandbox.mpesa.com/checkout/pay_123"
}`}</pre>

            <p className="font-semibold text-sm sm:text-base mb-1">Webhook</p>
            <pre className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto">{`POST /api/payments/webhook`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`{
  "paymentId": "pay_123",
  "status": "confirmed"
}`}</pre>
            <pre className="bg-gray-50 p-4 rounded border border-gray-200 overflow-x-auto">{`{
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
