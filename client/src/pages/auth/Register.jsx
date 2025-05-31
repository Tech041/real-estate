import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schema/RegisterSchema";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../utils/apiRequest";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  // For register form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const handleSubmitRegisterForm = async (data) => {
    try {
      const res = await apiRequest.post("/api/auth/register", data);
      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        navigate("/post");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error registering user", error);
    }
  };

  return (
    <section className="pt-20 h-screen w-full  flex items-center bg-gray-100">
      <div className="container ">
        <div className="flex justify-center items-center h-full ">
          <div className="bg-white p-6 rounded-lg shadow-md w-full  h-full">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Sign Up As Agent
            </h2>
            <form
              onSubmit={handleSubmit(handleSubmitRegisterForm)}
              className="space-y-4 w-full h-full"
            >
              <div className=" w-full h-full flex flex-col items-center justify-center gap-2">
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-md"
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className=" w-full h-full flex flex-col items-center justify-center gap-2">
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-md"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className=" w-full h-full flex flex-col items-center justify-center gap-2">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Create  password"
                  className="w-full p-3 border rounded-md"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
              <div className=" w-full h-full flex flex-col items-center justify-center gap-2">
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-600">{errors.phone.message}</p>
                )}
              </div>

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
            <Link to={"/login"} className="text-blue-600 cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
