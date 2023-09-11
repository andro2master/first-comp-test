import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const ButtonSharpSecondaryMd = () => {
  return (
    <button className="w-36 h-11 px-4  bg-white hover:bg-gray-100 focus:outline-double shadow flex-col justify-center items-start inline-flex">
      <div className="justify-center items-center inline-flex">
        <div />

        <div className="p-2">
          <HiOutlineEnvelope
            style={{ color: "#C9252C", height: "18px", width: "18px" }}
          />
        </div>
        <div className="w-2 h-2"></div>
        <div
          style={{ fontFamily: "Roboto", fontSize: "14px" }}
          className=" w-10 h-4 text-center text-[#C9252C] text-sm font-semibold leading-tight"
        >
          Button
        </div>
        <div className="w-2 h-2"></div>
        <div className="p-4.5">
          <HiArrowRight
            style={{ color: "#C9252C", height: "18px", width: "18px" }}
          />
        </div>
      </div>
    </button>
  );
};

export default ButtonSharpSecondaryMd;
