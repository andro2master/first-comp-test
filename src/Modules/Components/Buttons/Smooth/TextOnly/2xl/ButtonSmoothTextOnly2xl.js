import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const ButtonSmoothTexyOnly2xl = () => {
  return (
    <button className="w-44.5 h-16 px-4 rounded-lg bg-white hover:bg-gray-100 focus:outline-double shadow flex-col justify-center items-start inline-flex">
      <div className="justify-center items-center inline-flex">
        <div />

        <div className="p-6">
          <HiOutlineEnvelope
            style={{ color: "#C9252C", height: "24px", width: "24px" }}
          />
        </div>
        <div className="w-3 h-3"></div>
        <div
          style={{ fontFamily: "Roboto", fontSize: "18px" }}
          className=" w-14 h-4 text-center text-[#C9252C] text-sm font-semibold leading-tight"
        >
          Button
        </div>
        <div className="w-3 h-3"></div>
        <div className="p-6">
          <HiArrowRight
            style={{ color: "#C9252C", height: "24px", width: "24px" }}
          />
        </div>
      </div>
    </button>
  );
};

export default ButtonSmoothTexyOnly2xl;
