import React from "react";
import Accordion from "./Accordion";
const accordionContent = [
  {
    id: 1,
    title: "What types of properties do you sell?",
    description:
      "We offer a diverse range of properties to suit every need and lifestyle. Whether you're looking for a cozy apartment, a spacious family home, a luxurious villa, or a high-rise condo, I’ve got options for you. Our listings also include commercial properties, investment opportunities, and land for development. No matter your budget or preferences, We can help you find the perfect property to match your vision. Let’s get you started on finding your ideal space!",
  },
  {
    id: 2,
    title: "How do I know if a property is good investment?",
    description:
      "Our dedicated quamtity surveyors are ever ready to assist you achieve that. ",
  },
  {
    id: 3,
    title: "Do I need to hire a real estate agent?",
    description:
      "No, each property was listed by our registered agent. No need hiring external agent.",
  },
  {
    id: 4,
    title: "What is the process for buying a property?",
    description:
      "You progress from touring/inspection to legal documentation and finally payment",
  },
  {
    id: 5,
    title: "Can I tour a property before purchasing?",
    description:
      "Absolutely yes, you book appointment for touring on the website, through the contact of agent who listed the property",
  },
];

const FrequentQuestions = () => {
  return (
    <section className="pt-10 py-5 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center  gap-4">
          <div className="flex-1">
            <h1 className="capitalize text-2xl md:text-3xl font-semibold text-slate-900  px-2">
              Frequently asked questions.
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 ">
              Our experts guide you in making informed decisions based on market
              insights. We offer residential, commercial and luxury properties
              tailored to different preferences and budgets.
            </p>
          </div>
        </div>
        {/* Frequently asked questions */}
        <div className="">
          {accordionContent?.map((question) => (
            <Accordion
              key={question.id}
              title={question.title}
              description={question.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
