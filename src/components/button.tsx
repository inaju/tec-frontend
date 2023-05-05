import React from "react";

interface IButton {
  text: string;
  color: string;
  link: string;
  location?: string;
}

const Button = ({ location, text }: IButton) => {
  return (
    <div
      className={`${
        location == "put_your_money"
          ? "bg-white text-[#21242B]  hover:bg-[#21242B] hover:text-white hover:outline hover:outline-[#21242B] "
          : "hover:bg-white hover:text-[#21242B] hover:border hover:border-[#21242B] text-white"
      }   flex flex-row justify-center 
    items-center w-full bg-gray-900 
     py-2 px-auto rounded-[14px] mt-6 lg:w-fit lg:py-[13px]
     lg:px-[90px] font-semibold hover:cursor-pointer `}
    >
      {text}
    </div>
  );
};

export default Button;
