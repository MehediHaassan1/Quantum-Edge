import { Carousel } from 'flowbite-react';
import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img className='w-80 h-72 ' src="https://i.ibb.co/HXJr23n/hero-banner-1.png" alt='hero-banner-1' />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
                            <p className='text-neutralGray text-base mb-8'>Where to grow your bussiness as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img className='w-80 h-72 ' src="https://i.ibb.co/Xz8C4rP/hero-banner-2.png" alt='hero-banner-2' />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>Learn and Earn Money <span className='text-brandPrimary leading-snug'>in 4 months</span></h1>
                            <p className='text-neutralGray text-base mb-8'>Where to grow your bussiness as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img className='w-80 h-72 ' src="https://i.ibb.co/GvyqTRs/hero-banner-3.png" alt='hero-banner-3' />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug'>Share your work  <span className='text-brandPrimary leading-snug'>Your work is your familiarity</span></h1>
                            <p className='text-neutralGray text-base mb-8'>Where to grow your bussiness as a photographer: site or social media?</p>
                            <button className='btn-primary'>Register</button>
                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    )
}

export default Hero