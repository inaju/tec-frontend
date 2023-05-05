import React from "react";
import InfoCardText from "./InfoCardText";
import { InfoCardData } from "@/data/home";
import { container } from "@/styles/styles";

type Props = {};

const SecondInfoCard = (props: Props) => {
  return (
    <div
      className={`${container} mobile-container 
       desktop-container mt-16 lg:mt-28  pb-10 lg:pb-0
      xl:mt-[150px] sm:flex 
      sm:justify-between 
    sm:items-center `}
    >
      <InfoCardText title={InfoCardData[1].title} text={InfoCardData[1].text} />
      <div className="relative bg-black mt-10 rounded-[8px] lg:rounded-[15px] mb-10">
        <img
          src="./images/man_holding_bible.png"
          className="relative top-[10px]
        right-[10px]  sm:top-[20px] lg:top-[30px] lg:right-[20px]
        lg:max-w-[500px] xl:max-w-[600px]"
        />
      </div>
    </div>
  );
};

export default SecondInfoCard;
