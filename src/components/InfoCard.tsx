import React from "react";
import InfoCardImages from "./InfoCardImages";
import InfoCardText from "./InfoCardText";
import { InfoCardData } from "@/data/home";
import { container } from "@/styles/styles";

type Props = {};

const InfoCard = (props: Props) => {
  return (
    <div
      className={`${container} desktop-container  lg:mx-auto sm:flex 
    sm:flex-row sm:justify-between sm:items-start `}
    >
      <InfoCardImages
        image_one={InfoCardData[0].image_one}
        image_two={InfoCardData[0].image_two}
      />
      <InfoCardText title={InfoCardData[0].title} text={InfoCardData[0].text} />
    </div>
  );
};

export default InfoCard;
