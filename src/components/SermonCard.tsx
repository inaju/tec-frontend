import React from 'react'
import Anchor from './svg/anchor'
import Applepodcast from './svg/applepodcast'
import Googlepodcast from './svg/googlepodcast'
import Youtube from './svg/youtube'
import Spotify from './svg/spotify'
import Telegram from './telegram'
import Image from 'next/image'
import Linkout from './svg/linkout'

type Props = {}

const SermonCard = (props: Props) => {
    return (
        <div className=' shadow-[-9px_9px_30px_10px_rgba(74,34,179,0.05)] flex flex-col gap-2 p-6 bg-white m-2 rounded-[15px] sm:max-w-[300px] lg:max-w-[350px]'>  <img
            alt="man holding a bible"
            src={"./images/sermon_card.png"}
            className="object-cover w-full h-full relative rounded-[0.9375rem] lg:rounded-[1.875rem]" />
            <div className='flex text-[14px] gap-2 mt-1 mb-5'>

                <p className=''>Jan 16, 2023</p> <p className='text-[#BBBBBB]'>|
                </p>
                <p>Series: <b>
                    Burning hour
                </b>
                </p>
            </div>
            <div className=' w-full mb-2  border-[0.003px] border-[#EDEDEA] '></div>
            <div className='font-bold text-[24px] mt-2 mb-2'>The Daily Burning Hour</div>
            <div className=' w-full mb-2  border-[0.003px] border-[#EDEDEA] '></div>

            <p className='text-[14px] mb-3  '>Happy New Month Beloved. Special countdown to SOTOS Lagos Edition which doubles as our Supernatural Class for the month of June ....</p>
            <div className=' w-full mb-2  border-[0.003px] border-[#EDEDEA] '></div>
            <div className='flex justify-between items-center cursor-pointer'>


<Googlepodcast />
<Linkout />

{/*
 <Image src={"/images/googlepod.png"}  alt="google podcast" width={50} height={50} priority/>
<Image src={"/images/applepod.png"}  alt="apple podcast" width={50} height={50} priority/>
<Image src={"/images/youtube.png"}  alt="youtube podcast" width={50} height={50} priority/>
<Image src={"/images/spotify.png"}  alt="spotify podcast" width={50} height={50} priority/>
<Image src={"/images/telegram.png"}  alt="telegram podcast" width={50} height={50} priority/>
 */}

        </div>
            </div>
    )
}

export default SermonCard