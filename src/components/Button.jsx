import React from "react";

const Button = ({ children, style, className, onClick }) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
