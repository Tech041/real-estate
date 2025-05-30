import React from "react";


const Button = ({ children, iconClass, buttonClass }) => {
  return (
    
      <button className={buttonClass}>
        {children}{" "}
        <span className={iconClass}>
          {/* <LuArrowUpRight /> */}
        </span>
      </button>
    
  );
};

export default Button;
