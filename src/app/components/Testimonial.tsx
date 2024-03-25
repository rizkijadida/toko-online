import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div>
      <div className="m-16 text-4xl font-bold">
        <h1>TESTIMONIAL</h1>
      </div>
      <div className="mb-14 ml-5 mt-28 justify-center space-y-10 md:m-16 md:mt-0 md:flex md:space-x-6 md:space-y-0">
        {/* zoro */}
        <div>
          <Card className="w-[350px]">
            <CardContent className="p-4 ">
              <Image
                src="/zoro.avif"
                width={500}
                height={20}
                alt=""
                className="h-[300px] w-[315px] items-center"
              ></Image>
            </CardContent>
            <CardHeader>
              <CardDescription>Zoro</CardDescription>
              <CardTitle>
                Very high quality outfit at an appropriate price
              </CardTitle>
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

        {/* luffy */}
        <div>
          <Card className="w-[350px]">
            <CardContent className="p-4 ">
              <Image
                src="/luffy.avif"
                width={500}
                height={20}
                alt=""
                className="h-[300px] w-[315px] items-center"
              ></Image>
            </CardContent>
            <CardHeader>
              <CardDescription>Luffy</CardDescription>
              <CardTitle>very comfortable to use</CardTitle>
              <br />
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

        {/* sanji */}
        <div>
          <Card className="w-[350px]">
            <CardContent className="p-4 ">
              <Image
                src="/sanji.avif"
                width={500}
                height={20}
                alt=""
                className="h-[300px] w-[310px] items-center"
              ></Image>
            </CardContent>
            <CardHeader>
              <CardDescription>Sanji</CardDescription>
              <CardTitle>very elegant design</CardTitle>
              <br />
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

export default Testimonial;
