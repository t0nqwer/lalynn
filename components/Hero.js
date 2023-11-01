import React from "react";
import Image from "next/image";
import HeroImage from "@/public/19054.jpg";

const Hero = () => {
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

export default Hero;
