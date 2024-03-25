import React from "react";
import Image from "next/image";
import Button from "../shared/Button";

const Cardone = ({ img, desc, descfade, ...buttonProps }) => {
  return (
    <div className="flex flex-col items-center py-5 px-4 mt-5 md:flex-row md:justify-around gap-5 ">
      <div className="w-[270px] h-[280px] sm:w-[370px] md:w-[450px] lg:w-[528px] sm:h-[360px] md:h-[442px] lg:h-[521px] md:mr-5  relative">
        <Image src={img} alt="" fill />
      </div>
      <div className="w-[50%] gap-[10px]" >
        <h1 className="text-white font-bold font-Oswald text-[20px] sm:text-[28px]  md:text-[38px] lg:text-[49px]">{desc}</h1>
        <p className="font-Oswald text-slate-400  text-[20px] sm:text-[25px]  md:text-[31px] lg:text-[39px] ">
          {descfade}
        </p>
        <Button {...buttonProps} />
      </div>
    </div>
  );
};

export default Cardone;