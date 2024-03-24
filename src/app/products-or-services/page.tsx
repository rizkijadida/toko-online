import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const ProductsOrServices = () => {
  return (
    <div>
      <div className="md:mt-28 ml-5 mt-10 justify-center md:m-16 space-y-10 md:space-y-0 md:flex md:space-x-6 mb-10">
        
        {/* shirt */}
        <div>
          <Card className="w-[350px]">
            <CardContent className="p-4 ">
              <Image
                src="/shirt.jpg"
                width={500}
                height={20}
                alt=""
                className="items-center w-[315px] h-[300px]"
              ></Image>
            </CardContent>
            <CardHeader>
              <CardDescription>PRIA</CardDescription>
              <CardTitle>short Sleeves Shirt</CardTitle>
              <br />

              <CardTitle>Rp.199.000</CardTitle>
              <div className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* celana */}
        <div>
          <Card className="w-[350px]">
            <CardContent className="p-4 ">
              <Image
                src="/jeans.jpg"
                width={500}
                height={20}
                alt=""
                className="items-center w-[315px] h-[300px]"
              ></Image>
            </CardContent>
            <CardHeader>
              <CardDescription>PRIA</CardDescription>
              <CardTitle>Jeans</CardTitle>
              <br />

              <CardTitle>Rp.199.000</CardTitle>
              <div className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* sepatu */}
        <div>
          <Card className="w-[350px]">
            <CardContent className="p-4 ">
              <Image
                src="/shoes.jpg"
                width={500}
                height={20}
                alt=""
                className="items-center w-[310px] h-[300px]"
              ></Image>
            </CardContent>
            <CardHeader>
              <CardDescription>PRIA</CardDescription>
              <CardTitle>Shoes</CardTitle>
              <br />

              <CardTitle>Rp.199.000</CardTitle>
              <div className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductsOrServices;
