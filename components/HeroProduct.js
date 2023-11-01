"use client";
import React, { useEffect, useState } from "react";
import { url } from "@/public/url";
import Image from "next/image";

const HeroProduct = () => {
  const [heroProduct, setHeroProduct] = useState([]);
  const fetchHeroProduct = async () => {
    const res = await fetch(`${url}/api/product`);
    console.log(res.ok);
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setHeroProduct(data);
    } else {
    }
  };
  useEffect(() => {
    fetchHeroProduct();
  }, []);

  return (
    <div className="grid grid-cols-4 max-sm:grid-cols-2">
      {heroProduct.map((item, i) => {
        if (i < 4)
          return (
            <div
              key={item._id}
              className="flex flex-col w-full h-full text-sm text-black"
            >
              <Image
                src={item.frontImage}
                className="object-cover "
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                alt={item.name}
              />
              <div className="w-full h-12 px-5 py-1 ">
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default HeroProduct;
