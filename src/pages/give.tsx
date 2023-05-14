import Footer from '@/components/footer'
import Hero from '@/components/hero'
import TopBar from '@/components/topbar'
import React from 'react'

type Props = {}

const Give = (props: Props) => {
  return (
    <div>
    <TopBar />
      <Hero image={"./images/give_hero.jpg"}  text={"Giving"}
       hideButton={true}/>
       <Footer />
  </div>  )
}

export default Give