
import Navbar from "./Navbar";
import Footer from "./Footer";

const Auth = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white py-32 px-6 sm:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          🔐 Authentication
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Register new users or login to access your Hotel API account.
        </p>

        <div className="max-w-md mx-auto space-y-6">
          <button className="w-full bg-green-500 text-black px-6 py-3 rounded-full font-semibold uppercase hover:bg-green-600 transition">
            Register
          </button>
          <button className="w-full bg-black text-white px-6 py-3 rounded-full font-semibold uppercase hover:bg-gray-800 transition">
            Login
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Auth;
