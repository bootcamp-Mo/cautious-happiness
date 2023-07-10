import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";

const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <BiRightArrowAlt
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

export default RightArrow;

