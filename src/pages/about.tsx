import ApproachCards from "@/components/ApproachCards";
import InfoCard from "@/components/InfoCard";
import InfoCardText from "@/components/InfoCardText";
import OurVision from "@/components/OurVision";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import TopBar from "@/components/topbar";
import { InfoCardData } from "@/data/home";
import React from "react";

type Props = {};

const ApproachData = [
  {
    title: "Know Jesus",
    text: "Lorem ipsum dolor sit amet consectetur. Sit et in fusce eu cursus posuere nunc commodo. Consect etur ac tellus est gravida dui risus. Eget sit diam al "
  },
  {
    bgColor: '#ECF7FF2E',
    title: "Live Jesus",
    text: "Lorem ipsum dolor sit amet consectetur. Sit et in fusce eu cursus posuere nunc commodo. Consect etur ac tellus est gravida dui risus. Eget sit diam al "
  },
  {
    title: "Talk About Jesus",
    text: "Lorem ipsum dolor sit amet consectetur. Sit et in fusce eu cursus posuere nunc commodo. Consect etur ac tellus est gravida dui risus. Eget sit diam al "
  },
]
const About = (props: Props) => {
  return (
    <main className={` w-full`}>
      <TopBar />
      <div className=" ">
        <Hero
          image={"./images/unsplash_hero_2.jpg"}
          hideButton={true}
          text="About The Equipping Center"
        />
        <div
          className=" pt-10 px-8 sm:px-6 lg:px-[60px] xl:px-[90px] mx-auto lg:pt-[6.8125rem] bg-white ">
          <InfoCard index={3} />
        </div>
        <OurVision />
        <div className="bg-[#D1D1D1] pt-10 flex flex-col items-center">
          <h2 className="text-black text-[55px] leading-10 mb-10 font-semibold text-center mt-2">Our Approach</h2>
          <p>Celebrating unlimited life in Jesus</p>
          <p>
            Christ demands that you</p>
          <div className="flex flex-col lg:flex-row mt-10 mb-20 gap-10">
            {ApproachData.map((i) => (
              <ApproachCards bgColor={i.bgColor} title={i.title} text={i.text} />
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
};

export default About;
