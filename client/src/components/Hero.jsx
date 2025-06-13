import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <section className="h-screen w-full bg-[url('/img003.webp')] bg-cover pt-20 flex  items-center">
      <div className="container">
        <div className=" h-full w-full flex flex-col md:flex-row items-center justify-center  ">
          <div className="capitalize text-3xl lg:4xl font-bold text-white bg-black/50 px-4">
            <h1 className="text-center italic ">
              Welcome to LuxLife, one property at a time.
            </h1>
            <h3 className="text-base text-white text-center py-3">
              Own your world, buy properties from LuxLife now and experience
              maximum luxury.
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-5">
          <Button
            children={
              <Link
                onClick={() => scrollTo(0, 0)}
                to={"/properties"}
                className=""
              >
                Search properties
              </Link>
            }
            buttonClass={
              " bg-gradient-to-l from-orange-900 to-orange-300 hover:opacity-80 text-white px-3 md:px-4 py-1 md:py-2  flex justify-center items-center gap-2 rounded-md"
            }
            // iconClass={"text-white"}
          />
          {isAuth && (
            <Button
              children={
                <Link
                  onClick={() => scrollTo(0, 0)}
                  to={"/my-listing"}
                  className=""
                >
                  My Listings
                </Link>
              }
              buttonClass={
                " bg-white hover:opacity-80 text-orange-700 px-3 md:px-4 py-1 md:py-2  flex justify-center items-center gap-2 rounded-md"
              }
              // iconClass={"text-white"}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
