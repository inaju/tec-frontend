import React from "react";
import Button from "./button";
import { IInfoCard } from "@/interface";


const InfoCardText = ({title,text,location}: IInfoCard) => {
  return (
    <div className="sm:max-w-[280px]  md:max-w-[350px] 
    lg:max-w-[370px]  relative ">

      <h2 className={ `${location=="put_your_money" ? 'text-white':''} 
      font-gt font-bold text-4xl text-black mb-5 lg:leading-2`}>
        {title}
      </h2>

      <p className={ `${location=="put_your_money" ? 'text-white':''}
       montserrat font-light text-[1.25rem] leading-8`}>
      {text}
      </p>
      <Button location={location} text={location=="put_your_money" ? "Give now":"sermon"} color="#21242B" link="/sermon"
        />
    </div>
  );
};

export default InfoCardText;
