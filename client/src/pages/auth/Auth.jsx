import React, { useState } from "react";

const Auth = () => {
  const [toggle, setToggle] = useState(false);

  return toggle ? (
    <section className="pt-20 h-screen w-full  flex items-center bg-gray-100">
      <div className="container ">
        <div className="flex justify-center items-center h-full ">
          <div className="bg-white p-6 rounded-lg shadow-md  h-full">
            <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="password"
                placeholder="Create  password"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Your address"
                className="w-full p-3 border rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Register
              </button>
            </form>
          </div>
        </div>
        <div className="flex  justify-center items-center pt-4">
          <p className="">
            Have an account ?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </section>
  ) : (
    <section className="pt-20 h-screen w-ful  flex items-center bg-gray-100">
      <div className="container ">
        <div className="flex justify-center items-center h-full ">
          <div className="bg-white p-6 rounded-lg shadow-md  h-full">
            <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="flex  justify-center items-center pt-4">
          <p className="">
            Don&apos;t have an account ?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setToggle(!toggle)}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
