import React from "react";

const ButtonOffer = ({ title, BgColor, Textcolor }) => {
  return (
    <button
      className={`  w-[107px] h-[40px] bg-${BgColor}  text-${Textcolor} text-[14px]  hover:text-black hover:shadow-md   duration-[.4s] rounded-xl  `}
    >
      {title}
    </button>
  );
};

export default ButtonOffer;
