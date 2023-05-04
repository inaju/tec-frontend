import Image from "next/image";
import man_bible from "../../public/images/man_bible.png"
import mic_image from "../../public/images/mic_image.png"
import Button from "@/components/button";


export default function Home() {
  return (
    <main
      className={`  w-full mx-auto px-8  `}
    >
      <div className=" ">

  
      <div className="relative h-[350px]  flex flex-col  ">
      <div className=" absolute left-[50px] min-w-[250px] h-[250px] -z-10 ">
      <img alt="man holding a bible" src={"images/man_bible.png"}  className="w-full h-full relative " />
      </div>
      <div className=" absolute top-[100px] mb-10  min-w-[250px] h-[250px] ">
      <img alt="man holding a bible" src={"images/mic_image.png"}  className="w-full h-full" />
      </div>

      </div>

      <div>
        <h2 className="font-gt font-bold text-4xl text-black mb-5">
          We train a people for Christ
        </h2>
        <p className="font-montserrat text-[20px] leading-8">
          All scripture is given by inspiration of God and is useful for
          doctrine, for reproof, for correction and for training in
          righteousness.” The next most important thing after salvation is
          knowledge. God desires that you grow in your knowledge of what Christ
          has done and what you have as a result. Celebration Church is
          committed to your progress and joy in the faith and we have a
          spiritual curriculum to partner with you towards that purpose – to
          know Christ and to make Him known.
        </p>
        <Button text={"sermon"} color="#21242B" link="/sermon" />
      </div>
      </div>
    </main>
  );
}
