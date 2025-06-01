import React from "react";

const Contact = () => {
  return (
    <section className="pt-20 h-screen w-full flex justify-center items-center bg-gradient-to-tr from-blue-50 to-white">
      <div className="container">
        <div className="w-full h-full">
          <h1 className="text-lg text-center  font-extrabold pb-5">
            Contact Us
          </h1>
          <div className="">
            <p className="text-center font-semibold">
              At LuxLife, we value seamless connections and personalized
              service. Whether you’re looking for your dream home or have
              inquiries about our exclusive property listings, we’re here to
              help.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-5 pt-5">
            <p className="font-bold text-center">
              <span className="font-semibold text-orange-500">📍 Location</span>
              : CA.close, Victoria Island Lagos, Nigeria.
            </p>
            <p className="font-bold text-center">
              <span className="font-semibold text-orange-900">🌐 Website</span>:
              www.luxlife.onrender.com
            </p>
            <p className="font-bold text-center">
              <span className="font-semibold text-gray-900">✉️ Email</span>:
              support@luxlife.org
            </p>
            <p className="font-bold text-center">
              <span className="font-semibold text-green-950">📞 Phone</span>:
              09025942555
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
