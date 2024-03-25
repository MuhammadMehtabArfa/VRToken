import React from "react";
import Image from "next/image";
const Cardtwo = ({logo, abrr, fullabrr, price, img}) => {
  return (
    <section className="">
      <div className=" px-5  py-2 h-304 w-full bg-slate-950 text-white border  ">
        <div className="flex gap-4">
          <Image src={logo} alt="logo" height={55} width={55}  
          />
          <div className="flex pt-4">
            <h1>{abrr}</h1>
            <h1>({fullabrr})</h1>
          </div>
        </div>
        <div className="flex-col">
        <h1 className="py-2">$ {price}</h1>
        <Image src={img} alt="image" height={72} width={242} className="px-5 py-5 border"/>
      </div>
      </div>
      
    </section>
  );
};

export default Cardtwo;
