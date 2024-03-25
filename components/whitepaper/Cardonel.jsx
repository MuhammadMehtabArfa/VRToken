import React from "react";
import Button from "../shared/Button";
import Image from "next/image";
const Cardonel = ({ img, desc, descfade, ...buttonProps }) => {
  return (
    <div
      className="flex flex-col gap-5 
    items-center  md:flex-row md:justify-around py-5 px-4 mt-5"
    >
      <div className=" w-[50%]  gap-[]">
        <h1 className=" text-white font-Oswald text-4xl  lg:text-[50px] ">
          {desc}
        </h1>
        <p className="font-Oswald text-slate-400  text-[20px] sm:text-[25px]  md:text-[31px] lg:text-[39px]">
          {descfade}
        </p>
        <Button {...buttonProps} />
      </div>
      <div className=" w-[270px] h-[280px] sm:w-[370px] md:w-[450px] lg:w-[528px] sm:h-[360px] md:h-[442px] lg:h-[521px] md:mr-5 relative object-fill">
        <Image src={img} alt="" fill />
      </div>
    </div>
  );
};

export default Cardonel;
