
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white py-32 px-6 sm:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          📬 Contact Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Reach out to the Hotel Booking API team for support or inquiries.
        </p>

        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 rounded border border-gray-300" />
          <input type="email" placeholder="Email" className="p-3 rounded border border-gray-300" />
          <textarea placeholder="Message" className="p-3 rounded border border-gray-300"></textarea>
          <button className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold uppercase hover:bg-green-600 transition">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
