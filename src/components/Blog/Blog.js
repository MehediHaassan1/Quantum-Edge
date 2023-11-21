import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Blog = () => {
    const blogs = [
        { id: 1, title: 'Creating Streamlined Safeguarding Processes with OneRen', image: 'https://i.ibb.co/3RkT14S/blog1.jpg' },
        { id: 2, title: 'What are your safeguarding responsibilities and how can you manage them?', image: "https://i.ibb.co/ZTS8nks/blog2.jpg" },
        { id: 3, title: 'Revamping the Membership Model with Triathlon Australia', image: "https://i.ibb.co/kmRYNt6/blog3.jpg" },
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='md:w-3/4 mx-auto text-sm text-neutralGray mb-8 '>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
            </div>

            {/* all blogs */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer '>
                        <img src={blog.image} alt={blog.title} className='hover:scale-95 transition-all duration-300' />
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded md:w-3/5 mx-auto absolute left-0 right-0 -bottom-12'>
                            <h3 className='mb-3 text-neutralGray font-semibold'>{blog.title}</h3>
                            <div>
                                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700 flex items-center justify-center gap-2'>
                                    Read more <FaArrowRightLong />
                                </a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog