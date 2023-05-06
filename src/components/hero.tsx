import React from 'react'
import Button from './button'

type Props = {
    image:string;
}

const Hero = ({image}: Props) => {
  return (
    <div>
        <div className='w-full h-[100vh] relative'>

        <img
          alt="hero image"
          src={image}
          className="w-full h-full relative object-cover "
          />
          </div>
          <div className='flex flex-col items-center absolute transform top-[50%] left-[50%]  w-full translate-y-[-50%] translate-x-[-50%]'>

        <h2 className='text-[40px] lg:text-[60px] font-bold text-white'>Men Saved, Men Trained, Men Sent </h2>
        <Button  text="Latest sermon" location='put_your_money' />
          </div>
    </div>
  )
}

export default Hero