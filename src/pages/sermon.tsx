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
         <Footer />
    </div>
  )
}

export default Sermons