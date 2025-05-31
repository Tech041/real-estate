import React from "react";

const Admin = () => {
  return (
    <section className="pt-20 h-screen w-ful  flex items-center bg-gray-100">
      <div className="container ">
        <div className="flex justify-center items-center h-full ">
          <div className="bg-white p-6 rounded-lg shadow-md  h-full">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Login As Admin
            </h2>
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
      </div>
    </section>
  );
};

export default Admin;
