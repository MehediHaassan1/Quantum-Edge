import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Newsletter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 bg-neutralSilver'>
            <div className='flex items-center justify-center lg:w-2/5'>
                <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>Pellentesque suscipit fringilla libero eu.</h2>
                    <div className='flex items-center justify-center'>
                        <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGray transition-all duration-300 hover:-translate-y-4 flex items-center justify-between'>
                            Get a Demo <FaArrowRightLong className='ml-4' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter