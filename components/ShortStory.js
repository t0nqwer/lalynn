import React from "react";
import Image from "next/image";
import HeroImage from "@/public/blog_8-1024x683.jpeg";

const ShortStory = () => {
  return (
    <div className="w-full h-screen">
      <Image
        src={HeroImage}
        className="object-cover "
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
        alt="hero"
      />
    </div>
  );
};

export default ShortStory;
