import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section>Home</section>
            <section>Service</section>
            <section>About</section>
            <section>Product</section>
            <section>Testimonial</section>
            <section>Faq</section>
        </div>
    )
}

export default App