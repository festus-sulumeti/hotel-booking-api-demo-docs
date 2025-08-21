// import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaHotel, FaBed, FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

const features = [
  {
    icon: <FaUser size={28} />,
    title: "User Authentication",
    description: "Secure registration and login with JWT tokens.",
    linkText: "Learn more",
    linkHref: "#auth",
  },
  {
    icon: <FaHotel size={28} />,
    title: "Hotels Management",
    description: "List hotels, view details, and manage locations.",
    linkText: "Explore hotels",
    linkHref: "#hotels",
  },
  {
    icon: <FaBed size={28} />,
    title: "Rooms & Availability",
    description: "Check room availability and details for each hotel.",
    linkText: "View rooms",
    linkHref: "#rooms",
  },
  {
    icon: <FaCreditCard size={28} />,
    title: "Booking & Payments",
    description: "Create bookings and process payments via M-Pesa or card.",
    linkText: "Start booking",
    linkHref: "#bookings",
  },
];

const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="bg-green-500 text-black py-32 px-6 sm:px-12 text-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Hotel Booking <span className="block">API Demo</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Developer-friendly API built with Node.js & Express 5 for hotels, rooms, bookings, and payments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-500 px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base uppercase tracking-wide hover:bg-gray-100 transition"
            >
              <Link to="/docs">Get Started</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base uppercase tracking-wide hover:bg-white hover:text-black transition"
            >
              <Link to="/auth">API Docs</Link>
            </motion.button>
          </div>
        </motion.div>
      </section>


      {/* Welcome Section */}
      <section className="relative bg-white py-20 px-6 sm:px-10 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-left"
        >
          {/* Small Uppercase Intro Text */}
          <p className="uppercase tracking-[0.15em] text-[11px] font-bold text-green-500 mb-6">
            Welcome to Hotel Booking API
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-black leading-snug mb-10">
            Simplify hotel management with a single API.
            <span className="block">
              Manage hotels, rooms, bookings, and payments efficiently.
            </span>
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Solid Black Button */}
            <Link
              to="/docs"
              className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-gray-800 transition text-center"
            >
              Explore Docs
            </Link>

            {/* White Button with Gray Border */}
            <Link
              to="/contact"
              className="bg-black text-white border border-gray-300 text-black px-8 py-3 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-gray-100 transition text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>


      {/* Features Section */}
      <section className="bg-white text-black py-16 sm:py-20 px-6 sm:px-12">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Key API Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Explore the endpoints that make hotel management easy, secure, and fast.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center bg-green-50 rounded-2xl shadow-md border border-green-200 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl sm:text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 text-black">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">{item.description}</p>
              <a
                href={item.linkHref}
                className="inline-flex items-center font-semibold text-green-500 hover:text-green-600 transition-colors duration-200 text-sm sm:text-base"
              >
                {item.linkText}
                <span className="ml-1 sm:ml-2 text-lg sm:text-xl">›</span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20 px-6 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to integrate?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Start using the Hotel Booking API in your project today and simplify hotel management.
          </p>
          <Link
            to="/docs"
            className="bg-green-500 text-black px-8 py-3 rounded-full font-semibold text-sm sm:text-base uppercase tracking-wide hover:bg-green-600 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Hero;
