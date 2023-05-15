import React from "react";
import Emailicon from "./svg/emailicon";
import Locationicon from "./svg/locationicon";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-10 lg:px-20 py-10 bg-black gap-6
     text-white flex flex-col md:flex-wrap md:flex-row justify-between">
        <div className="flex flex-col gap-6">
          <h2 className="text-[30px] font-bold">Connect with us</h2>
         
          <div className="text-[16px] flex flex-col gap-4">

          <span className="flex items-center gap-2">
            <Emailicon /> theequipingcenter@gmail.com</span>
          <span className="flex items-center gap-2">
             <Locationicon /> 11832 S. Warner Elliot LoopPhoenix, AZ 85044 </span>
          </div>

        </div>
        <div className="flex flex-col ">
          <h2 className="text-[30px] font-bold">Quick Links</h2>
          <div className="text-[16px] flex flex-col gap-4 mt-4">

          <Link href="/give" prefetch={true}>
        <p>Give</p>
        </Link>
        <Link href="/about" prefetch={true}>
        <p>About Us</p>
        </Link>
        <Link href="/sermon" prefetch={true}>
        <p>Sermons</p>
        </Link>
        <Link href="/contact" prefetch={true}>
        <p>Contact Us</p>
        </Link>

       

        </div>
          </div>
          <div className="flex flex-col">
          <h2 className="text-[30px] font-bold">Join Our Mailing List</h2>
          <div className="text-[16px] flex flex-col gap-4 mt-4">

            <p>Subscribe to our newsletter to get our latest updates and news</p>
          </div>
          <div className="flex flex-row justify-between bg-white rounded-[10px] mt-2">
            <input type="email" className="outline-none border-none p-3 mx-6 text-black" placeholder="your email address" />

          </div>
          </div>

    </div>
  );
};

export default Footer;
