import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Service', path: 'service' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'product' },
        { link: 'Testimonial', path: 'testimonial' },
        { link: 'FAQ', path: 'faq' },
    ]

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-o right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src="https://i.ibb.co/S5Vz4Dg/logo.png" alt="logo" className='w-10 inline-block items-center' />
                        <span className='uppercase text-[#263238]'>QuantumEdge</span>
                    </a>

                    {/* nav items for large device */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} key={path} spy={true} smooth={true} offset={-100} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                        }
                    </ul>

                    {/* btn for large device */}
                    <div className='space-x-12 lg:flex items-center hidden'>
                        <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                        <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGray'>Sign up</button>
                    </div>

                    {/* menu btn for mobile device */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGray'>

                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6'></FaXmark>) : (<FaBars className='h-6 w-6 '></FaBars>)
                            }
                        </button>
                    </div>
                </div>

                {/* menu for mobile */}
                <div className={`space-py-4 px-4 mt-16 py-7 bg-brandPrimary  ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} key={path} spy={true} smooth={true} offset={-100} className='block text-base text-white hover:text-brandPrimary first:font-medium'>{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar