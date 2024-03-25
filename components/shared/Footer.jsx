import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex-col pt-7 bg-gradient-to-r from-gray-800 to-purple-700 ">
      <div className=" bg-gradient-to-r from-blue-500 to-purple-500 px-4  text-center py-5 font-bold pt-4 text-stone-50 font-Oswald text-xl w-full">
        <h1>Contact support</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3  justify-around items-center px-10 pt-5 ">
          <div className="flex gap-2">
            <Image src="/cardone_1.png" alt="card1" width={23} height={23} />{" "}
            <h1>BTC</h1>
            <h2>(bitcoin)</h2>
          </div>
          <div className="flex gap-2">
            <Image src="/cardone_1.png" alt="card1" width={23} height={23} />{" "}
            <h1>BTC</h1>
            <h2>(bitcoin)</h2>
          </div>
          <div className="flex gap-2">
            <Image src="/cardone_1.png" alt="card1" width={23} height={23} />{" "}
            <h1>BTC</h1>
            <h2>(bitcoin)</h2>
          </div>
          <div className="flex gap-2">
            <Image src="/cardone_1.png" alt="card1" width={23} height={23} />{" "}
            <h1>BTC</h1>
            <h2>(bitcoin)</h2>
          </div>
        </div>
      </div>
      <div className="justify-around flex text-slate-500 bg-slate-800 h-20">
        <h2 className="pt-8 px-10">@2023 all right reserved</h2>
        <h2 className="pt-8 px-10">@2023 all right reserved</h2>
      </div>
    </div>
  );
};

export default Footer;