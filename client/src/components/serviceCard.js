import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './stylefiles/serviceCard.css';
import  alpha  from './images/alpha1.png'
import  bata  from './images/bata1.png'
import  omage  from './images/omage1.png'
/* eslint-disable */
export function ServiceCard() {
    return (
        <Container fluid className='services-contaier-packages '>
            <img style={{height:50+'em'}} className='alpha' src={alpha} /> 
            <img style={{height:50+'em'}} className='beta' src={bata} />
            <img style={{height:50+'em'}} className='omaga' src={omage} />
                
        </Container>
    );
}

export default ServiceCard;