import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";
import useLogout from "../hooks/useLogout";

const mobileStyle = "cursor-pointer text-white hover:text-gray-400 w-[100px]";
const liStyles = "hover:cursor-pointer hover:text-black/70  px-2 ";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, isAuth } = useContext(AppContext);
  const Logout = useLogout();

  return (
    <header className=" fixed pb-2  h-auto w-full bg-gradient-to-bl from-orange-50 to-white z-40">
      <div className="container">
        <div className="flex items-center hover:cursor-pointer">
          {/* logo */}
          <div className="flex-1 flex items-center gap-1 ">
            <Link to={"/"} className="flex  items-center justify-center gap-2">
              <span className=" p-[2px] bg-gradient-to-l from-orange-400 to-blue-600 rounded-full">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
              </span>
              <span className="text-xl font-extrabold text-black hidden md:block   ">
                LuxLife
              </span>
            </Link>
          </div>
          {/* nav links */}
          <nav className=" flex justify-between items-center gap-3 flex-[2] relative">
            <div className="flex-[3] hidden md:block ">
              <ul className="flex justify-center items-center gap-5 text-black  font-semibold">
                <li className={liStyles}>
                  <Link to={"/"}>Home</Link>
                </li>
                <li className={liStyles}>
                  <Link to={"/about"}>About</Link>
                </li>

                <li className={liStyles}>
                  <Link to={"/properties"}>Properties</Link>
                </li>
                <li className={liStyles}>
                  <Link to={"contact"}>Contact</Link>
                </li>
                {token ? (
                  <Link to={"/messages"} className="text-red-700">
                    Messages
                  </Link>
                ) : (
                  <li className={liStyles}>
                    <Link to="/admin">Admin</Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex-1 flex  items-center gap-4 justify-end ">
              {isAuth ? (
                <Button
                  children={
                    <span onClick={Logout} className="">
                      Logout
                    </span>
                  }
                  buttonClass={
                    " bg-black hover:opacity-80 text-white px-3 md:px-4 py-1 md:py-2  flex justify-center items-center gap-2 rounded-md"
                  }
                  // iconClass={"text-white"}
                />
              ) : (
                <Button
                  children={
                    <Link to={"/login"} className="">
                      Login
                    </Link>
                  }
                  buttonClass={
                    " bg-black hover:opacity-80 text-white px-3 md:px-4 py-1 md:py-2  flex justify-center items-center gap-2 rounded-md"
                  }
                  // iconClass={"text-white"}
                />
              )}

              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden z-40 cursor-pointer"
              >
                {isOpen ? (
                  <MdClose color="white" size={30} />
                ) : (
                  <GiHamburgerMenu size={20} color="black" />
                )}
              </div>
            </div>
          </nav>
          {/* Mobile nav */}
          <nav
            className={`${
              isOpen ? "right-0" : "right-[-100%]"
            } md:hidden absolute  top-0 h-screen  w-[70%] bg-black   transition-all duration-700 ease-out z-30`}
          >
            <ul className="text-black mt-20 pt-10 flex flex-col gap-6 items-center font-bold  ">
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <Link to={"/"} className="">
                  Home
                </Link>
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <Link to={"/about"} className="">
                  About
                </Link>
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <Link to={"/properties"} className="">
                  Properties
                </Link>
              </li>

              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                <Link to={"/contact"} className="">
                  Contact
                </Link>
              </li>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className={mobileStyle}
              >
                {token ? (
                  <Link to={"/messages"} className="text-red-700">
                    Messages
                  </Link>
                ) : (
                  <Link to="/admin">Admin</Link>
                )}{" "}
              </li>
            </ul>
            {/* social links */}
            <div className="flex items-center justify-center gap-5 pt-10 ">
              <div className=" bg-blue-700 p-2 rounded-full">
                <Link
                  href="https://www.facebook.com/mandela.nelson.18062"
                  target="_blank"
                  className=""
                >
                  <span className="">
                    <FaFacebookF size={20} color="white" />
                  </span>
                </Link>
              </div>
              <div className="bg-blue-700 p-2 rounded-full">
                <Link
                  href="https://www.linkedin.com/in/nel21"
                  target="_blank"
                  className=""
                >
                  <span className="">
                    <FaLinkedinIn size={20} color="white" />
                  </span>
                </Link>
              </div>
              <div className="bg-green-700 p-2 rounded-full">
                <Link
                  href="https://wa.link/cfop30"
                  target="_blank"
                  className=""
                >
                  <span className="">
                    <FaWhatsapp size={20} color="white" />
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
