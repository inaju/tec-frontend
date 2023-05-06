import { IInfoCard } from "@/interface";
import React from "react";

const InfoCardImages = ({ image_one, image_two }: IInfoCard) => {
  const imageDimensions = `min-w-[14rem]  
  h-[14.625rem] sm:h-[15rem] sm:min-w-[17rem]   sm:max-w-[29rem] sm:w-full sm:h-full
   sm:object-contain lg:w-[340px] lg:h-[320px] xl:w-[430px] xl:h-[420px]`;
  return (
    <div
      className="relative h-[21.875rem] 
    sm:h-[22rem] sm:w-[full]  sm:mr-20
   
     flex flex-col  mb-10   sm:mb-28 sm:max-w-[500px] "
    >
      <div
        className={`${imageDimensions} absolute z-1 left-[2.8125rem]
          lg:left-[8.8125rem] `}
      >
        <img
          alt="man holding a bible"
          src={image_one}
          className="w-full h-full relative rounded-[0.9375rem] 
          lg:rounded-[1.875rem]"
        />
      </div>
      <div
        className={`${imageDimensions} absolute top-[6.25rem] xl:top-[9.25rem] 
        mb-10`}
      >
        <img alt="microphone image" src={image_two} className="w-full h-full 
        rounded-[0.9375rem] lg:rounded-[1.875rem]" />
      </div>
    </div>
  );
};

export default InfoCardImages;
