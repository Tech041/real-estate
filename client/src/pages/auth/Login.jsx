import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../schema/LoginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import apiRequest from "../../utils/apiRequest";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";
const Login = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useContext(AppContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const handleSubmitLoginForm = async (data) => {
    const res = await apiRequest.post("/api/auth/login", data);
    if (res.data.success) {
      toast.success(res.data.message);
      reset();
      navigate("/post");
      setIsAuth(true);
    } else {
      toast.error(res.data.message);
    }
  };
  return (
    <section className="pt-20 h-screen w-full  flex items-center bg-gray-100">
      <div className="container ">
        <div className="flex justify-center items-center w-full h-full ">
          <div className="bg-white p-6 rounded-lg shadow-md  w-full h-full">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Login As Agent
            </h2>
            <form
              onSubmit={handleSubmit(handleSubmitLoginForm)}
              className="space-y-4 w-full h-full"
            >
              <div className=" w-full h-full flex flex-col items-center justify-center gap-2">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border rounded-md"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

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
            <Link to={"/register"} className="text-blue-600 cursor-pointer">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
