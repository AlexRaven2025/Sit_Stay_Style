import React from 'react';
import NavbarMain from './navbar'
import './stylefiles/home.css'
import winter1  from './images/winter1.jpg'
import home_pic1 from './images/home_pic1.png'
import Foot from './footer'
/* eslint-disable */
export function Home() {
    return (
        <div className='main-home-container'>
    <div className='nav-top'>
        <NavbarMain />
    </div>
    <div className='image-container'>
        <img src={winter1} className="img-fluid custom-image1" alt="Responsive image"/>
        <div className="image-overlay d-flex align-items-center justify-content-center">
        <pre className="text-center overlay-text">
Welcome to our pet paradise! At Sit Stay Style, we're committed to pampering your furry friends
with exceptional grooming services that blend affordability and comfort. Join us in creating unforgettable
grooming experiences for your beloved pets.
        </pre>
    </div>
    </div>
    <section className='text-section py-4'>
        <div className="container-XXL  bg-light p-4">
            <div className="row">
                <div className="col-lg-6 text-center mb-5">
                    <h1 className="display-4">Welcome to Sit Stay Style</h1>
                    <pre className="lead">    Welcome to Sit Stay Styles, the ultimate destination for pet</pre>
                     <pre className="lead">   pampering. Our commitment to satisfaction extends to every pet, from playful</pre>
                     <pre className="lead">   pups to curious cats. With over 13 years of grooming experience, we're your</pre>
                     <pre className="lead">   trusted choice for top-notch pet care. Our journey includes training from</pre>
                     <pre className="lead">   esteemed show groomers, including the renowned Blake Hernandez. Serving the</pre>
                     <pre className="lead">   Central Texas community, we're excited to offer a grooming haven where both</pre>
                     <pre className="lead">   Dogs and cats can experience unparalleled comfort and style</pre>
                    
                </div>
                <div className="col-lg-6 ">
                    <img src={home_pic1} alt="main-home-image" className="img-fluid rounded custom-home-image" />
                </div>
            </div>
        </div>
    </section>
    <Foot />
</div>
    );
}
export default Home;