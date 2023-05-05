import Image from "next/image";
import man_bible from "../../public/images/man_bible.png";
import mic_image from "../../public/images/mic_image.png";
import Button from "@/components/button";
import { container } from "@/styles/styles";
import InfoCard from "@/components/InfoCard";
import SecondInfoCard from "@/components/SecondInfoCard";
import PutYourMoney from "@/components/PutYourMoney";

export default function Home() {
  return (
    <main className={` w-full`}>
      <div className=" ">
        <div
          className="px-8  mx-auto  sm:px-6 lg:px-[60px] 
      xl:px-[90px]  mx-auto bg-[#D1D1D1] lg:pt-[6.8125rem] "
        >
          <InfoCard />
          <SecondInfoCard />
        </div>
        <div className="relative bg-black/[0.85] ">
          <div className="absolute top-0 curved"></div>
        </div>
        <div
          className=" bg-black/[0.85]  xl:pb-28 px-8  mx-auto  sm:px-6 lg:px-[60px] 
      xl:px-[90px]  mx-auto py-20 lg:py-16 lg:pt-[6.8125rem]"
        >
          <PutYourMoney />
        </div>
      </div>
    </main>
  );
}
