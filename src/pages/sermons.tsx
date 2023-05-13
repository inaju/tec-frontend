import Hero from '@/components/hero'
import React from 'react'

type Props = {}

const Sermons = (props: Props) => {
  return (
    <div>
        <Hero image={"./images/unsplash_hero_1.jpg"}  text={"Sermon"}
         hideButton={true}/>
    </div>
  )
}

export default Sermons