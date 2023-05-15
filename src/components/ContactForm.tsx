import React from 'react'

type Props = {}

const ContactForm = (props: Props) => {
    return (
        <div className='bg-[#D1D1D1] rounded-xl flex flex-col  p-5 mb-10 sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]   mx-auto'>
            <div className=' sm:max-w-[400px] md:max-w-[500px] lg:max-w-[1000px]  mx-auto '>

            <div className='text-center'>

                <h3 className='mt-10 font-bold text-[25px]  '>SEND A MESSAGE</h3>
                <p className='mt-2 text-[15px] '>Can’t find what you’re looking for? Need help?
                    Feel free to send us a message.</p>
            </div>
            <form className='mt-10 lg:max-w-full  '>
                {/* name */}
                <div className='mt-4'>
                <label className='text-[13px]'>Name(Required)</label>
                <div className="flex flex-row justify-between bg-white rounded-[10px] mt-2">
                    <input type="text" className="w-full outline-none border-none p-3 mx-3 text-black text-[13px]"  />
                </div>
                </div>
                {/* email */}
                <div className='mt-4'>
                <label className='text-[13px]'>Email(Required)</label>
                <div className="flex flex-row justify-between bg-white rounded-[10px] mt-2">
                    <input type="email" className="w-full outline-none border-none p-3 mx-3 text-black text-[13px]"  />
                </div>
                </div>
                {/* Subject */}
                <div className='mt-4'>
                <label className='text-[13px]'>Subject(Required)</label>
                <div className="flex flex-row justify-between bg-white rounded-[10px] mt-2">
                    <input type="text" className="w-full outline-none border-none p-3 mx-3 text-black text-[13px]"  />
                </div>
                </div>
                {/* Phone Number */}
                <div className='mt-4'>
                <label className='text-[13px]'>Phone Number(Required)</label>
                <div className="flex flex-row justify-between bg-white rounded-[10px] mt-2">
                    <input type="text" className="w-full outline-none border-none p-3 mx-3 text-black text-[13px]"  />
                </div>
                </div>
                {/* Message */}
                <div className='mt-4'>
                <label className='text-[13px]'>Message(Required)</label>
                <div className="flex flex-row justify-between bg-white rounded-[10px] mt-2">
                    <textarea  className="w-full outline-none border-none p-3 mx-3 text-black text-[13px]"  />
                </div>
                </div>
                <button className='w-fit p-2 px-8 text-xs bg-[#21242B] text-white rounded-lg mt-10'>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default ContactForm