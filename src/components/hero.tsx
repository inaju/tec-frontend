import React from "react";
import Button from "./button";

type Props = {
  image: string;
};

const Hero = ({ image }: Props) => {
  return (
    <div>
      <div className="w-full h-[100vh] relative ">
        <img
          alt="hero image"
          src={image}
          className="w-full h-full relative object-cover  "
        />
      </div>
      <div className="flex flex-col items-center p-6 absolute transform 
      top-[60%] lg:top-[65%] left-[50%]  w-full translate-y-[-50%]
       translate-x-[-50%]">
        <h2 className="mx-auto text-center text-[40px] lg:text-[60px] 
        font-bold text-white ">
          Men Saved, Men Trained, Men Sent{" "}
        </h2>
        <Button text="Latest Sermon" location="put_your_money" />
      </div>
    </div>
  );
};

export default Hero;
