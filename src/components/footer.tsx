import React from "react";
import Emailicon from "./svg/emailicon";
import Locationicon from "./svg/locationicon";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="px-10 lg:px-20 py-10 bg-black gap-6
     text-white flex flex-col md:flex-wrap md:flex-row justify-between">
        <div className="flex flex-col gap-6">
          <h2 className="text-[30px] font-bold">Connect with us</h2>
          {/* <div>
            <Facebookicon />
            <Instagramicon />
            <Linkedin />
            <Twittericon />

          </div> */}
          <div className="text-[16px] flex flex-col gap-4">

          <span className="flex items-center gap-2">
            <Emailicon /> theequipingcenter@gmail.com</span>
          <span className="flex items-center gap-2">
             <Locationicon /> Lorem ipsum dolor sit amet consectetur. </span>
          </div>

        </div>
        <div className="flex flex-col ">
          <h2 className="text-[30px] font-bold">Quick Links</h2>
          <div className="text-[16px] flex flex-col gap-4">

        <p>About Us</p>
        <p>Sermons</p>
        <p>Contact Us</p>
        <p>Give</p>

        </div>
          </div>
          <div className="flex flex-col">
          <h2 className="text-[30px] font-bold">Join Our Mailing List</h2>
          <div className="text-[16px] flex flex-col gap-4">

            <p>Subscribe to our newsletter to get our latest updates and news</p>
          </div>
          </div>

    </div>
  );
};

export default Footer;
