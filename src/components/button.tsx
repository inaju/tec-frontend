import Link from "next/link";
import React from "react";
import { Url } from "url";

interface IButton {
  text?: string;
  color?: string;
  link?: string;
  location?: string;
  bgColor?: string;
}

const Button = ({ location, text, bgColor, link }: IButton) => {
  return (
    <Link href={`${link}`} prefetch={true}   className={`${(location == "put_your_money" || bgColor == "white") ? "bg-white text-[#21242B]  " : "bg-gray-900 text-white"
  }  hover:opacity-80 flex flex-row justify-center 
items-center w-full sm:w-fit sm:px-8
py-3 px-auto rounded-[14px] mt-6 lg:w-fit lg:py-[15px]
lg:px-[50px] font-bold hover:cursor-pointer `}>
      
        {text}
    </Link>
  );
};

export default Button;
