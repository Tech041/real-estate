import React from "react";

const About = () => {
  return (
    <section className="pt-20 h-full md:h-screen pb-5 w-full flex justify-center items-center bg-gradient-to-tl from-green-50 to-white ">
      <div className="container">
        <h1 className="text-xl font-extrabold flex items-center justify-center gap-2 pb-5">
          <span className="">About</span>{" "}
          <span className="text-green-700">LuxLife</span>
        </h1>
        <div className="flex flex-col items-center  justify-center gap-4 h-full w-full font-semibold">
          <p className="">
            Welcome to LuxLife, where dreams meet luxury and exceptional
            properties become reality. We specialize in curating and selling
            premium homes that redefine comfort, style, and elegance. Whether
            you're searching for a modern penthouse, a serene villa, or a
            sophisticated city residence, LuxLife ensures you find a space that
            matches your vision
          </p>

          <p className="">
            Our commitment goes beyond selling homes—we deliver a lifestyle.
            With an expert team dedicated to personalized service, we guide you
            through every step of the journey, ensuring a seamless experience.
            At LuxLife, we believe that where you live shapes how you live, and
            we’re here to help you elevate that experience.
          </p>
          <p className="">
            Discover your dream home today—because luxury is not just a choice,
            it's a way of life.
          </p>
          <h2 className="text-center font-bold text-orange-400">
            Our Mission and Vision.
          </h2>
          <p className="">
            However, LuxLife is a multi-agent platform, where registered agents
            are authorized to enlist their respective properties and their
            contacts. We specialize in connecting buyers to sellers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
