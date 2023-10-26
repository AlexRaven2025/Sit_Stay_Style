import React from 'react';
import NavbarMain from './navbar';
import Foot from './footer';
import { Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './stylefiles/services.css';
import ServiceCard from './serviceCard';
import ServicesLis from './servicesList';
/* eslint-disable */
export function Services(){
        return (
            <div className='main-services-container'>
                <NavbarMain/> 
              

              
                <Container fluid className='services-contaier-packages'>
                       <ServiceCard />
                </Container>

        <Container fluid className='custom-list-container-services'>
            <ServicesLis />
        </Container>

            <Container md className='random-phrase-bottom'>
                <h3>At Sit Stay Style, our commitment is to provide tailored</h3>
                <h3>grooming experiences that prioritize your pet's comfort and well-being. Choose</h3>
                <h3>the perfect package or mix-and-match from our à la carte options to create a</h3>
                <h3>grooming experience as unique as your furry friend.</h3>
            </Container>


            <Foot />
            </div>
        );
    
}

export default Services;