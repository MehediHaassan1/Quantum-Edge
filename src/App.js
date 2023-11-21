import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Service from './components/Service/Service';
import About from './components/About/About';
import Product from './components/Product/Product';
import Blog from './components/Blog/Blog';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Service></Service>
            <About></About>
            <Product></Product>
            <Blog></Blog>
        </div>
    )
}

export default App