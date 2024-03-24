"use client";
import Image from "next/image";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex-cols-3 mx-auto my-auto flex justify-between shadow-md md:p-8 md:px-12">
        <Link href="/">
          <div className="ml-4 mt-14 h-10 w-10 rounded md:mt-0 md:h-[80px] md:w-[80px]">
            <Image src="/logobrand.png" alt="logo" width={80} height={80} />
          </div>
        </Link>
        <div className="spcace-x-2 mx-auto my-auto  justify-center font-bold md:flex md:space-x-10">
          <p>WANITA</p>
          <p>PRIA</p>
          <p>ANAK</p>
          <p>BAYI</p>
        </div>
        <div className="mb-3 mr-4 mt-2 space-y-2 md:mt-6 md:flex md:space-x-10 md:space-y-0">
          <FaMagnifyingGlass className="w-[20px]" size={30} />
          <IoMdLogIn className="w-[20px] " size={30} />
          <FaRegHeart className="w-[20px] " size={30} />
          <FaCartShopping className="w-[20px]" size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
