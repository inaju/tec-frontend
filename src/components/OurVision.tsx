import React from 'react'
import InfoCardText from './InfoCardText'
import { InfoCardData } from '@/data/home'

type Props = {}

const OurVision = (props: Props) => {
  return (
    <div className=" pt-20 mx-auto mt-20  bg-black h-full">
        <div className=' max-w-[1300px] px-10 mx-auto'>
          <h2 className="text-white text-[55px] leading-10 mb-10 font-semibold lg:font-bold text-center mt-2">Vision</h2>
          {/* first */}
          <div className="flex flex-col sm:flex-row sm:justify-between p-10 w-full ">
            <InfoCardText location="about" textColor="white" title={InfoCardData[4].title} text={InfoCardData[4].text} buttonText={InfoCardData[4].buttonText} buttonColor={InfoCardData[4].buttonColor} buttonLink={InfoCardData[4].buttonLink} />
            <div className="order-first   bg-black mt-4 rounded-[8px] lg:rounded-[15px] mb-10">
              <img
                src="./images/man_holding_bible.png"
                className="sm:max-w-[350px] lg:max-w-[500px] xl:max-w-[500px]"
              />
            </div>
            </div>
          {/* second */}
          <div className="flex flex-col sm:flex-row sm:justify-between p-10 w-full ">
            <InfoCardText location="about" textColor="white" title={InfoCardData[5].title} text={InfoCardData[5].text} buttonText={InfoCardData[4].buttonText} buttonColor={InfoCardData[4].buttonColor} buttonLink={InfoCardData[4].buttonLink} />
            <div className="order-first sm:order-last bg-black mt-4 rounded-[8px] lg:rounded-[15px] mb-10">
              <img
                src="./images/man_holding_bible.png"
                className="sm:max-w-[350px] lg:max-w-[500px] xl:max-w-[500px]"
              />
            </div>
            </div>
              {/* third */}
          <div className="flex flex-col sm:flex-row sm:justify-between p-10 w-full ">
            <InfoCardText location="about" textColor="white" title={InfoCardData[6].title} text={InfoCardData[6].text} buttonText={InfoCardData[4].buttonText} buttonColor={InfoCardData[4].buttonColor} buttonLink={InfoCardData[4].buttonLink} />
            <div className="order-first   bg-black mt-4 rounded-[8px] lg:rounded-[15px] mb-10">
              <img
                src="./images/man_holding_bible.png"
                className="  sm:max-w-[350px] lg:max-w-[500px] xl:max-w-[500px]"
              />
            </div>
            </div>
            </div>
        </div>
  )
}

export default OurVision