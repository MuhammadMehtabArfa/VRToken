import React from "react";
import Image from "next/image";
import Cardone from "./Cardone";
import Cardonel from "./Cardonel";
import Cardtwo from "./Cardtwo";
const Whitepaper = () => {
  return (
    <>
      {" "}
      <section className="   size-full flex-col  bg-gradient-to-r from-gray-800 to-purple-700 py-7 ">
        <div className="grid  sm:grid-cols-1  lg:grid-cols-2 md:grid-cols-2  place-items-center justify-center px-12 gap-4">
          <div className=" flex flex-col ">
            <h1 className=" font-Oswald font-bold text-white text-wrap text-[20px] sm:text-[25px]  md:text-[40px] lg:text-[61px]  ">
              BUY SELL OR SWAP INSTANTLY
            </h1>
            <h1 className=" font-Oswald font-bold text-gray-400 text-[15px] md:text-[30px] lg:text-[39px] text-wrap ">
              Unlock the world of cryptocurrency trading
            </h1>
          </div>
          <div className=" w-[160px] h-[160px] sm:w-[200px] md:w-[300px] lg:w-[398px] sm:h-[200px] md:h-[300px] lg:h-[398px] relative place-items-center">
            {" "}
            <Image src="/coin.png" alt=""  fill />
          </div>
        </div>
        <div className="  bg-gradient-to-r from-blue-500 to-purple-500   text-center py-5 font-bold mt-9 text-stone-50 font-Oswald text-[19px] sm:text-[25px]  md:text-[32px] lg:text-[40px]">
          Experience the freedom to trade over 250 tokens fast!
        </div>
        <div className="bg-gradient-to-r from-gray-800 to-purple-700 mt-9  ">
          <Cardone
            img="/cardone_1.png"
            desc="We are a totally decentralized exchange"
            descfade="Your keys - Your coins"
          />
          <Cardonel
            img="/cardone_2.png"
            desc="Own your own crypto, just like cash, in your wallet"
            descfade="Self custody of your funds, as it should be"
            type="button"
            title="Learn more"
            style="bg-gradient-to-r from-sky-300 to-purple-500 text-white text-[16px] font-bold px-[10px] py-[5px] md:px-[16px] md:py-[8px] md:px-[22px] md:py-[11px] md:px-[30px] md:py-[15px]hover:pointer"
          />
          <Cardone
            img="/cardone_3.png"
            desc="MOVE ASSETS ACROSS NETWORKS IN SECONDS !"
          />
        </div>
        <div className=" text-center font-bold mt-14">
          {" "}
          <h1 className=" font-Oswald text-white text-3xl">
            We will always find you the best rate,
          </h1>
          <br />
          <p className="font-Oswald text-slate-400 text-2xl">
            at no additional cost to you
          </p>
          <br />
          <h1 className="font-Oswald text-white text-3xl">
            no matter which network you are on
          </h1>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-10 bg-gradient-to-r from-gray-800 to-purple-700 justify-around">
        <Cardtwo
          logo="/logo.png"
          img="/cardone_3.png"
          abrr="BTC"
          fullabrr="Bitcoin"
          price={23.33}
        />
        <Cardtwo
          logo="/logo.png"
          img="/cardone_3.png"
          abrr="BTC"
          fullabrr="Bitcoin"
          price={0.4457833}
        />
        <Cardtwo
          logo="/logo.png"
          img="/cardone_3.png"
          abrr="BTC"
          fullabrr="Bitcoin"
          price={44.7864}
        />
      </section>
    </>
  );
};

export default Whitepaper;
