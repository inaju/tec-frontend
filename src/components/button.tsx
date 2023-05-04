import React from 'react'

interface IButton {
    text:string;
    color:string;
    link:string;
}

const Button = (props: IButton) => {
  return (
    <div className='flex flex-row justify-center items-center w-full bg-gray-900 text-white py-2 px-auto rounded-[14px] mt-6'>Sermon</div>
  )
}

export default Button