import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-tr from-black to-gray-600 text-white h-full">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-14  text-sm">
          <div className="">
            <div className="">
              <p className="text-xl font-medium mb-5 pt-5 text-orange-700 ">
                LuxLife
              </p>
              <div className="w-[50px] h-[50px] rounded-full bg-orange-700 flex justify-center items-center ">
                <Link onClick={() => scrollTo(0, 0)} className="">
                  <img
                    src="/logo.png"
                    alt=""
                    width={50}
                    height={50}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-xl font-medium mb-5 pt-5 text-white ">
              Quick Link
            </p>
            <ul className="flex flex-col md:justify-center md:items-center justify-start items-start gap-1 italic">
              <li className="cursor-pointer py-1">
                <Link onClick={() => scrollTo(0, 0)} to={"/"} className="">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link onClick={() => scrollTo(0, 0)} to={"/about"} className="">
                  About
                </Link>
              </li>
              {/* <li className="cursor-pointer">
                <Link onClick={() => scrollTo(0, 0)} to={"/admin"} className="">
                  Admin
                </Link>
              </li> */}
              <li className="cursor-pointer py-1">
                <Link onClick={() => scrollTo(0, 0)} to={"/properties"} className="">
                  Properties
                </Link>
              </li>

              <li className="cursor-pointer py-1">
                <Link onClick={() => scrollTo(0, 0)} to={"/contact"} className="">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-3">
            <p className="text-xl font-medium mb-5 text-white ">Contact Us</p>
            <div className="">
              <div className="flex  items-center w-full ">
                <div className="flex items-center justify-between gap-3  ">
                  <div className="p-2 bg-blue-600 rounded-full">
                    <a
                      href="https://www.facebook.com/mandela.nelson.18062"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaFacebookF size={20} color="white" />
                      </span>
                    </a>
                  </div>
                  <div className="p-2 bg-blue-600 rounded-full">
                    <a
                      href="https://www.linkedin.com/in/nel21"
                      target="_blank"
                      className=""
                    >
                      <span className="">
                        <FaLinkedinIn size={20} color="white" />
                      </span>
                    </a>
                  </div>
                  {/* <div className="p-2 rounded-full bg-green-600">
                    <a
                      href="https://wa.link/cfop30"
                      target="_blank"
                      className=""
                    >
                      <span className=" ">
                        <FaWhatsapp size={20} color="white" />
                      </span>
                    </a>
                  </div> */}
                </div>
              </div>
              {/* <div className="pt-3">
                <a
                  href="tel:+2348030507512"
                  className="flex items-center gap-3"
                >
                  <FaPhone size={15} />
                  <span className="">+2348030507512</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-xs text-center text-orange-500  ">
            Copyright &copy;LuxLife {new Date().getFullYear()} <br />
            <span className="">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
