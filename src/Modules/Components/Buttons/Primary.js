import React from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const Primary = () => {

  
  return (
    <button className="w-32.5 h-10 px-4  bg-red-600 shadow flex-col justify-center items-start inline-flex">
      <div className="self-stretch justify-center items-center inline-flex"><div />
        <div>
          <HiOutlineEnvelope style={{ color: "white", height:"18px", width:"18px" }} />
        </div>

        <div className="w-20 h-4 text-center text-white text-sm font-semibold leading-tight">
          Button
        </div>
        <div >
          <HiArrowRight style={{ color: "white", height:"18px", width:"18px" }} />
        </div>
      </div>
    </button>
  );
};

export default Primary;

