import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const AboutUS = () => {
  return (
    <div className="md:m-24 md:space-y-16 mt-10 m-6">
      {/* company profile */}
      <div>
        <h1 className="font-bold text-4xl">What Are We Doing?</h1>
        <br />
        <p className="md:text-xl md:pr-56">
          We have been serving since 1991. It all began with a desire to seek
          attire that offers comfort yet maintains an elegant appearance amidst
          the inundation of stylish trends that are often uncomfortable to wear.
        </p>
      </div>

      {/* our team */}

      <div>
        <h1 className="font-bold text-4xl mt-20">Teams</h1>
        <br />
        <p className="tmd:ext-xl md:pr-56">
          Our mission to create stylish yet comfortable clothing unites us.
          Therefore, we work together cohesively. This is who we are
        </p>
      </div>

      {/* teams */}
      <div>
        <div className="md:flex  justify-center md:space-x-6 md:m-16 space-y-10 md:space-y-0 mt-10">
          {/* Chopper */}
          <div>
            <Card className="w-[350px]">
              <CardContent className="p-4 ">
                <Image
                  src="/chopper.avif"
                  width={500}
                  height={20}
                  alt=""
                  className="items-center w-[315px] h-[300px]"
                ></Image>
              </CardContent>
              <CardHeader>
                <CardDescription>chopper</CardDescription>
                <CardTitle>Founder</CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Nami */}
          <div>
            <Card className="w-[350px]">
              <CardContent className="p-4 ">
                <Image
                  src="/nami.avif"
                  width={500}
                  height={20}
                  alt=""
                  className="items-center w-[315px] h-[300px]"
                ></Image>
              </CardContent>
              <CardHeader>
                <CardDescription>Nami</CardDescription>
                <CardTitle>Manager</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <div className="md:flex justify-center md:space-x-6 md:m-16 space-y-10 md:space-y-0 mt-10">
          {/* Usopp */}
          <div className="">
            <Card className="w-[350px]">
              <CardContent className="p-4 ">
                <Image
                  src="/usopp.avif"
                  width={500}
                  height={20}
                  alt=""
                  className="items-center w-[310px] h-[300px]"
                ></Image>
              </CardContent>
              <CardHeader>
                <CardDescription>Usopp</CardDescription>
                <CardTitle>Marketing Staff</CardTitle>
                <br />
              </CardHeader>
            </Card>
          </div>

          {/* Franky */}
          <div>
            <Card className="w-[350px]">
              <CardContent className="p-4 ">
                <Image
                  src="/franky.avif"
                  width={500}
                  height={20}
                  alt=""
                  className="items-center w-[310px] h-[300px]"
                ></Image>
              </CardContent>
              <CardHeader>
                <CardDescription>Franky</CardDescription>
                <CardTitle>Production Stuff</CardTitle>
                <br />
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>

      {/* company culture */}
      <div>
        <h1 className="font-bold text-4xl mt-20">Company Culture</h1>
        <br />
        <p className="md:text-xl md:pr-56">
          The culture present in our company revolves around unity and
          togetherness. When we are cohesive and supportive of each other,
          collaboration becomes extremely comfortable. With this comfort, we
          believe we can enhance the productivity and achieve the highest
          quality we possess. Complementing each other's strengths and
          weaknesses is our primary strength. Additionally, we embrace a growth
          mindset that enables us to continuously improve ourselves every day.
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
