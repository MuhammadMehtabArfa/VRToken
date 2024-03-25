import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gradient-to-r from-gray-800 to-purple-700 max-container py-3 px-5">
      <div className="flex gap-2 pl-3">
        <Image src="/logo.png" alt="logo" width={50} height={30} />
        <Image
          src="/token.png "
          alt="logo"
          width={100}
          height={30}
          
        />
      </div>
      <div className="flex">
        <ul className="flex gap-2 justify-center pt-3  font-bold lg:text-20px pr-2  text-gray-200 hover:text-black">
          <li>
            <Link className="hover:text-sky-300 " href="">
              WhitePaper
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-300" href="">
              Airdrop
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-300" href="">
              AIbot
            </Link>
          </li>
          <li>
            <Link className="hover:text-sky-300" href="">
              Contact
            </Link>
          </li>
        </ul>
        <Button
        type='button'
        title="Download App"
        color="bg-gradient-to-r from-gray-800 to-purple-700 text-white "/>
      </div>
    </nav>
  );
};

export default Navbar;
