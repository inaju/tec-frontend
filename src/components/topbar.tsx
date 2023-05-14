import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

const TopBar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="relative bg-black w-full flex justify-between py-4 lg:px-10 px-6">
      <div></div>
      <div className="visible lg:hidden ">
        {show ? (
          <MdOutlineClose
            onClick={() => setShow(!show)}
            size={25}
            color="white"
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => setShow(!show)}
            size={25}
            color="white"
          />
        )}
      </div>
      {/* mobile */}
      {show && (
        <div className="fixed top-0 left-0 h-screen w-screen z-10 bg-black">
          <div className="absolute top-8 right-6">
            <MdOutlineClose
              onClick={() => setShow(!show)}
              size={25}
              color="white"
            />
          </div>
          <div
            className=" py-[100px] px-10 text-xl text-left h-full w-full text-white flex flex-col justify-between  
        items-center flex-start gap-8 hover:cursor-pointer "
          >
            <Link href="/" prefetch={true}>
              <p>Home</p>
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
            <Link href="/give" prefetch={true} className=' bg-white text-black-300"
            hover:opacity-80 flex flex-row justify-center 
            items-center w-full py-3 sm:px-2
           px-auto rounded-[14px]  lg:w-fit lg:py-[10px]
            lg:px-[50px] font-bold hover:cursor-pointer'>

              <p className="text-black">Give</p>
            </Link>
          </div>
        </div>
      )}

      {/* desktop */}
      <div
        className="hidden lg:flex text-white flex justify-between  
        items-center flex-start gap-8 hover:cursor-pointer "
      >
        <Link href="/" prefetch={true}>
          <p>Home</p>
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
        <Link href="/give" prefetch={true}>
          <button
            className=' bg-white text-black-300"
          hover:opacity-80 flex flex-row justify-center 
          items-center w-fit sm:px-2
          py-1 px-auto rounded-[14px]  lg:w-fit lg:py-[10px]
          lg:px-[50px] font-bold hover:cursor-pointer'
          >

            <p className="text-black">Give</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
