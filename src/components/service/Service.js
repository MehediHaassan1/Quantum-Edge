import React from 'react';



const Service = () => {
    const services = [
        { id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image: "https://i.ibb.co/xmfq73s/icon1.png" },
        { id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: "https://i.ibb.co/6Z8VDzc/icon2.png" },
        { id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "https://i.ibb.co/P9nXD5n/icon3.png" },
    ];


    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutralGray'>We have been working with some fortune 500+ clients</p>
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src="https://i.ibb.co/DKsmhnG/company1.png" alt="company1" />
                    <img src="https://i.ibb.co/TmMKC8G/company2.png" alt="company2" />
                    <img src="https://i.ibb.co/WWNbDFr/company3.png" alt="company3" />
                    <img src="https://i.ibb.co/4T6TtTR/company4.png" alt="company4" />
                    <img src="https://i.ibb.co/5KfX6xx/company5.png" alt="company5" />
                    <img src="https://i.ibb.co/5vkm70M/company6.png" alt="company6" />
                    <img src="https://i.ibb.co/jbwJj2V/company7.png" alt="company7" />
                </div>

                {/* Service card */}
                <div className='mt-20 md:w-1/2 mx-auto text-center'>
                    <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Manage your entire community in a single system</h2>
                    <p className='text-neutralGray'>Who is QuantumEdge suitable for?</p>
                </div>

                {/* Cards */}
                <div className='mt-14 grid lg:grid-cols-3 mg:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
                    {
                        services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                            <div>
                                <div className="bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl ">
                                    <img src={service.image} alt='service' className='ml-3' />
                                </div>
                                <h4 className='text-2xl font-bold text-neutralDGray mb-2 px-2'>{service.title}</h4>
                                <p className='text-sm text-neutralGray'>{service.description}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Service