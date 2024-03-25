import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="   flex justify-between bg-gradient-to-r from-gray-800 to-purple-700 max-container sm:text-[13px] lg:text-[16px] md:text-[10px] text-[8px] py-3 px-12">
      <div className="flex gap-2 pl-3">
        <Link href="/">
          <Image
            src="/logo.png"
            className="pt-2 cover size-full"
            alt="logo"
            width={50}
            height={30}
          />{" "}
        </Link>
        <Link href="/">
          <Image
            src="/token.png "
            alt="logo"
            width={100}
            height={30}
            className="pt-2 
       coversize-full"
          />
        </Link>
      </div>
      <div className="flex gap-[15px]">
        <ul className="flex gap-[25px] justify-center pt-3  font-bold lg:text-20px pr-2  ">
          <li>
            <Link
              className=" text-gray-200 hover:text-black "
              href="/whitepaper"
            >
              WhitePaper
            </Link>
          </li>
          <li>
            <Link className=" text-gray-200 hover:text-black" href="">
              Airdrop
            </Link>
          </li>
          <li>
            <Link className=" text-gray-200 hover:text-black" href="">
              AIbot
            </Link>
          </li>
          <li>
            <Link className=" text-gray-200 hover:text-black" href="">
              Contact
            </Link>
          </li>
        </ul>
        <Button
          type="button"
          title="Download App"
          style="bg-gradient-to-r from-sky-300 to-purple-500 text-white mt-1 font-bold p-2 hover:pointer  "
        />
      </div>
    </nav>
  );
};

export default Navbar;
