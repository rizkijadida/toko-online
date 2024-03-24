import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div>
      <div className="cursor-pointer grid-cols-5 justify-center bg-gray-200 p-4 md:grid">
        <Link href="/about-us">
          {/* About Use */}
          <div className="grid space-y-6 p-4">
            <p className="text-xl font-bold">About Clo-Sics</p>
            <p>Location</p>
            <p>Purchase in Large Quantities</p>
            <p>Live Station</p>
          </div>
        </Link>

        <Link href="/products-or-services">
          {/* Services */}
          <div className="grid space-y-6 p-4">
            <p className="text-xl font-bold">Services</p>
            <p>Contact Us</p>
            <p>Alteration Service</p>
            <p>Gift Delivery Service</p>
            <p>Consumer Complaints Service</p>
          </div>
        </Link>

        {/* Services */}
        <div className="grid space-y-6 p-4">
          <p className="text-xl font-bold">Account</p>
          <p>Membership</p>
          <p>Profil</p>
          <p>Coupon</p>
        </div>

        <Link href="/teams">
          {/* Teams */}

          <div className="grid space-y-6 p-4">
            <p className="text-xl font-bold">Teams</p>
            <p>Founder</p>
            <p>Manager</p>
            <p>Marketing Staff</p>
            <p>Production Staff</p>
          </div>
        </Link>

        {/* Social Media Account */}
        <div className="grid space-y-6 p-4 ">
          <p className="text-xl font-bold">Social Media</p>
          <FaInstagramSquare size={40} />
          <FaFacebookSquare size={40} />
          <FaYoutube size={40} />
          <FaTwitterSquare size={40} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
