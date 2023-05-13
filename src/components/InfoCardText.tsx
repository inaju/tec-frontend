import React from "react";
import Button from "./button";
import { IInfoCard } from "@/interface";


const InfoCardText = ({title,text,location, textColor,buttonText,buttonColor, buttonLink}: IInfoCard) => {
  return (
    <div className={`${location=="about" ?"lg:max-w-[500px] ":"lg:max-w-[370px] "} sm:max-w-[280px]  md:max-w-[350px] 
     relative `}>

      <h2 className={ `${(location=="put_your_money" || textColor=="white")? 'text-white':''} 
      font-gt font-bold text-4xl text-black mb-5 lg:leading-2`}>
        {title}
      </h2>

      <p className={ `${(location=="put_your_money"|| textColor=="white") ? 'text-white':''}
       montserrat font-light text-[1.25rem] leading-8 `}>
      {text}
      </p>
      <Button location={location} text={buttonText} bgColor={buttonColor} link={buttonLink}
        />
    </div>
  );
};

export default InfoCardText;
