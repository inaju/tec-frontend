import React from "react";
import Button from "./button";
import { Url } from "url";

type Props = {
  image: string;
  text: string;
  buttonLink?: string;
  hideButton?: boolean;
};

const Hero = ({ image,hideButton,text,buttonLink }: Props) => {
  return (
    <div>
      <div className="w-full h-[100vh] relative ">
        <div className="bg-black/40 h-full top-0 z-1"></div>
        <img
          alt="hero image"
          src={image}
          className="w-full h-full absolute top-0 -z-10 object-cover  "
        />
      </div>
      <div className="flex flex-col items-center p-6 absolute transform 
      top-[60%] lg:top-[65%] left-[50%]  w-full translate-y-[-50%]
       translate-x-[-50%]">
        <h2 className="mx-auto text-center text-[40px] lg:text-[60px] 
        font-bold text-white ">
          {text}
          {" "}
        </h2>
        {hideButton ??
        <Button text="Latest Sermon" location="put_your_money" link={buttonLink} />
        }
      </div>
    </div>
  );
};

export default Hero;
