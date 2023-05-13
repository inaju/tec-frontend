import React from "react";
import InfoCardImages from "./InfoCardImages";
import InfoCardText from "./InfoCardText";
import { InfoCardData } from "@/data/home";
import { container } from "@/styles/styles";

 interface IInfoCard {
  index:number

}
const InfoCard = ({index}: IInfoCard) => {
  return (
    <div
      className={`${container} desktop-container lg:mx-auto 
      sm:flex sm:flex-row sm:justify-between sm:items-center `}
    >
      <InfoCardImages
        image_one={InfoCardData[index].image_one}
        image_two={InfoCardData[index].image_two}
      />
      <InfoCardText title={InfoCardData[index].title} text={InfoCardData[index].text}
      buttonText={InfoCardData[index].buttonText} buttonColor={InfoCardData[index].buttonColor} buttonLink={InfoCardData[index].buttonLink}  />
    </div>
  );
};

export default InfoCard;
