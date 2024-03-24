// "use client"
import Image from "next/image";
import Link from "next/link";
import ProductsOrServices from "../components/ProductsOrServices";
import Testimonial from "../components/Testimonial";

const Homepage = () => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-3">
        <div className="col-span-2">
          <Image
            src="/homepage.jpg"
            alt=""
            width={1000}
            height={100}
            className=""
          />
        </div>
        <div>
          <Image
            src="/ramadhan.png"
            alt=""
            className=" h-[173px] w-[500px] md:h-[563px]"
            width={500}
            height={10}
          />
        </div>
      </div>
      <div className="m-12 grid-cols-3  space-y-10 border border-slate-300 p-6 text-center font-bold md:grid md:space-y-0">
        <div>
          <p>LINE COLLECTION</p>
        </div>
        <div>
          <p>HARI RAYA EDITION</p>
        </div>
        <div>
          <p>LIMITED OFFER</p>
        </div>
      </div>

      <div className="flex h-screen  items-center bg-hero-pattern bg-cover md:bg-center">
        <h1 className="ml-5 text-3xl text-lime-100 md:text-9xl">
          Classic Looks, Contemporary Flair
        </h1>
      </div>

      <div className="left-11 m-5 mb-0 mt-14 md:m-12 md:mb-28 md:mt-28 ">
        <h1 className="text-4xl font-bold">Company</h1>
        <br />
        <p className="md:pr-56 md:text-xl">
          Clos-sics is one of the biggest classic fashion companies, one of the
          world's largest distribution. We always provide what is most
          comfortable for customers. The customer is at the heart of our unique
          business model, which includes design, production, distribution, and
          sales, through our extensive retail network. We have been serving our
          customer's needs since 1991. W have the best team in the worl with
          best attitude culture
        </p>
      </div>
      <div>
        <ProductsOrServices />
      </div>

      <Link href="/products-or-services">
        <div className="m-6  mt-32 flex h-20 cursor-pointer items-center justify-center rounded border-black text-center text-2xl font-bold md:mb-32 md:ml-64 md:mr-64 border">
          LET'S SHOP HERE!
        </div>
      </Link>

      {/* testimoni */}
      <div>
        <Testimonial />
      </div>

    </div>
  );
};

export default Homepage;
