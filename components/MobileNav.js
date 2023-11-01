"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import email from "@/public/alternate_email_black_24dp.svg";
import home from "@/public/home_black_24dp.svg";
import info from "@/public/info_black_24dp.svg";
import store from "@/public/storefront_black_24dp.svg";
import account from "@/public/account.svg";
import Cart from "@/public/cart.svg";

const MobileNav = () => {
  const router = useRouter();
  return (
    <div className="fixed z-50 flex justify-center w-full h-10 rounded-full bottom-5 md:hidden">
      <div className="flex justify-around w-3/4 h-full py-2 bg-white rounded-full bg-opacity-70 max-sm:w-5/6 outline outline-1 ">
        <div
          className="flex items-center justify-center w-full h-full rounded-full cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src={home}
            className="h-full "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="logo"
          />
        </div>
        <div
          className="flex items-center justify-center w-full h-full rounded-full cursor-pointer"
          onClick={() => router.push("/shop")}
        >
          <Image
            src={store}
            className="h-full "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="logo"
          />
        </div>
        <div
          className="flex items-center justify-center w-full h-full rounded-full cursor-pointer"
          onClick={() => router.push("/about")}
        >
          <Image
            src={info}
            className="h-full "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="logo"
          />
        </div>
        <div
          className="flex items-center justify-center w-full h-full rounded-full cursor-pointer"
          onClick={() => router.push("/contact")}
        >
          <Image
            src={email}
            className="h-full "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="logo"
          />
        </div>
        <div
          className="flex items-center justify-center w-full h-full rounded-full cursor-pointer sm:hidden"
          onClick={() => router.push("/account")}
        >
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
        <div
          className="flex items-center justify-center w-full h-full rounded-full cursor-pointer sm:hidden"
          onClick={() => router.push("/cart")}
        >
          <Image
            src={Cart}
            className="h-full "
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
