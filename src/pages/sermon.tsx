import SermonCard from '@/components/SermonCard'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import TopBar from '@/components/topbar'
import React from 'react'

type Props = {}

const Sermons = (props: Props) => {
  return (
    <div>
      <TopBar />
        <Hero image={"./images/seyitan_praying.jpg"}  text={"Sermon"}
         hideButton={true}/>
         <div className=' my-10  flex flex-col sm:flex-wrap  sm:flex-row mx-auto xl:max-w-[1150px]'>

         {[1,2,3,5,6,7,8,9,10].map((i)=>(
           <SermonCard />
           ))}
           </div>
         <Footer />
    </div>
  )
}

export default Sermons