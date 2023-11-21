import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Service from './components/service/Service';
import About from './components/about/About';
import Product from './components/product/Product';
import Testimonial from './components/testimonial/Testimonial';
import Faq from './components/faq/Faq';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Hero></Hero>
            <Service></Service>
            <About></About>
            <Product></Product>
            <Testimonial></Testimonial>
            <Faq></Faq> */}
        </div>
    )
}

export default App