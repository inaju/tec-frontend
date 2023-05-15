import ContactForm from '@/components/ContactForm'
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
     <div className='-mt-40 z-10 relative'>

     <ContactForm />
     </div>
     <Footer /></div>
  )
}

export default Contact