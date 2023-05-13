import React from 'react'

interface IApproachCards {
    title: string;
    text: string;
    bgColor?: string;
}

const ApproachCards = ({ title, text, bgColor }: IApproachCards) => {
    return (
        <div className={`${bgColor ? 'bg-[#606060]' : 'bg-[#16181E]'} shadow-[-34px_57px_200px_rgba(21,21,24,0.7)] flex flex-col m-2 rounded-lg lg:rounded-2xl lg:max-w-[350px] p-10  items-center text-white `}
        ><h3 className='text-[40px] font-semibold text-center'>
            {title}</h3>
            <p className='text-center mt-4'>
                {text}            </p></div>
    )
}

export default ApproachCards