import Image from "next/image";
import man_bible from "../../public/images/man_bible.png";
import mic_image from "../../public/images/mic_image.png";
import Button from "@/components/button";
import { container } from "@/styles/styles";
import InfoCard from "@/components/InfoCard";
import SecondInfoCard from "@/components/SecondInfoCard";
import PutYourMoney from "@/components/PutYourMoney";
import Hero from "@/components/hero";
import TopBar from "@/components/topbar";

export default function Home() {
  return (
    <main className={` w-full`}>
      <TopBar />
      <div className=" ">
        <Hero image={"./images/unsplash_hero_1.jpg"} />
        <div
          className=" pt-10 px-8  mx-auto sm:px-6 lg:px-[60px] 
      xl:px-[90px] mx-auto lg:pt-[6.8125rem] bg-[#D1D1D1] "
        >
          <InfoCard />
          <SecondInfoCard />
        </div>
        <div className="relative bg-black/[0.85] ">
          <div className="absolute top-0 curved"></div>
        </div>
        <div
          className=" xl:pb-28 px-8  mx-auto  sm:px-6 lg:px-[60px] 
      xl:px-[90px] mx-auto lg:pt-[6.8125rem]  py-20  
      bg-black/[0.85]"
        >
          <PutYourMoney />
        </div>
        <div
          className="flex flex-col items-center text-center lg:max-w-[850px]
            xl:pb-28 px-8  mx-auto  sm:px-6 lg:px-[60px] 
      xl:px-[90px] mx-auto lg:pt-[6.8125rem]  py-20  lg:py-26 bg-white"
        >
          <h2 className="text-[2.5rem] mb-6  font-bold">Statement of faith</h2>
          <p className="montserrat font-light text-[1.25rem] leading-8">
            Our mandate is revival and our language is a continued commitment to
            the Word and to Prayer. With your partnership, we can take this fire
            to reach more people in more nations.
          </p>
        </div>
      </div>
    </main>
  );
}
