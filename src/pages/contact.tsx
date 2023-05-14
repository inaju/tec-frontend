import Footer from '@/components/footer'
import Hero from '@/components/hero'
import TopBar from '@/components/topbar'
import React from 'react'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div><TopBar />
    <Hero image={"./images/contact_hero.jpg"}  text={"Contact"}
     hideButton={true}/>
     <Footer /></div>
  )
}

export default Contact