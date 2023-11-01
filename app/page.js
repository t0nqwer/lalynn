import React from "react";
import Image from "next/image";
import HeroImage from "@/public/19054.jpg";
import Hero from "@/components/Hero";
import HeroProduct from "@/components/HeroProduct";
import ShortStory from "@/components/ShortStory";

function page() {
  return (
    <div>
      <Hero />

      <ul className="flex items-center justify-around w-full h-10 text-black bg-white ">
        <li className="flex items-center justify-center w-full h-full cursor-pointer">
          ส่งฟรีทั่วไทย
        </li>
        <li className="flex items-center justify-center w-full h-full cursor-pointer">
          สินค้าคุณภาพ
        </li>
        <li className="flex items-center justify-center w-full h-full cursor-pointer">
          บริการดี
        </li>
      </ul>
      <HeroProduct />
      <ShortStory />
    </div>
  );
}

export default page;
