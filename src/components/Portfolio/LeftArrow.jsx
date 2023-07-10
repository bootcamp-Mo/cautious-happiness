import React from 'react';
import { BiLeftArrowAlt } from "react-icons/bi";

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <BiLeftArrowAlt
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

export default LeftArrow;
