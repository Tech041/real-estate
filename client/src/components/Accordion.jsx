import React, { useState } from "react";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-full p-4 bg-white border rounded-lg  my-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-bold text-gray-900 flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
};

export default Accordion;
