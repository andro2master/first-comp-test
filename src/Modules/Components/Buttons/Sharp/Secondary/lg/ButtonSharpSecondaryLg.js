import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const ButtonSharpSecondaryLg = () => {
  return (
    <button className="w-38 h-12 px-4  bg-white hover:bg-gray-100 focus:outline-double shadow flex-col justify-center items-start inline-flex">
      <div className="justify-center items-center inline-flex">
        <div />

        <div className="p-4">
          <HiOutlineEnvelope
            style={{ color: "#C9252C", height: "20px", width: "20px" }}
          />
        </div>
        <div className="w-2 h-2"></div>
        <div
          style={{ fontFamily: "Roboto", fontSize: "14px" }}
          className=" w-16 h-4 text-center text-[#C9252C] text-sm font-semibold leading-tight"
        >
          Button
        </div>
        <div className="w-2 h-2"></div>
        <div className="">
          <HiArrowRight
            style={{ color: "#C9252C", height: "20px", width: "20px" }}
          />
        </div>
      </div>
    </button>
  );
};

export default ButtonSharpSecondaryLg;
