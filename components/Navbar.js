"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { useRouter } from "next/navigation";
import Cart from "@/public/cart.svg";
import account from "@/public/account.svg";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed justify-between flex w-full h-[70px] px-20 py-5 bg-white bg-opacity-90 max-lg:px-10 max-sm:justify-center ">
      <div className="flex justify-center max-sm:">
        <div className="">
          <Image
            src={Logo}
            className="h-full "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="logo"
          />
        </div>
        <ul className="flex items-center ml-20 space-x-10 text-black max-md:hidden">
          <li className="py-3 cursor-pointer" onClick={() => router.push("/")}>
            Home
          </li>
          <li
            className="py-3 cursor-pointer"
            onClick={() => router.push("shop")}
          >
            Shop
          </li>
          <li
            className="py-3 cursor-pointer"
            onClick={() => router.push("about")}
          >
            About
          </li>
          <li
            className="py-3 cursor-pointer"
            onClick={() => router.push("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="flex space-x-10 max-sm:hidden">
        <Image
          src={Cart}
          className="h-full "
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
        <Image
          src={account}
          className="h-full "
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Navbar;
