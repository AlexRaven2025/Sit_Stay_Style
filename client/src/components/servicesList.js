import React from 'react';
import { Container, Image } from 'react-bootstrap';
import icon1 from './images/icons/icon1.png'
import icon2 from './images/icons/icon2.png'
import icon3 from './images/icons/icon3.png'
import icon4 from './images/icons/icon4.png'
import icon5 from './images/icons/icon5.png'
import icon6 from './images/icons/icon6.png'
import icon7 from './images/icons/icon7.png'
import icon8 from './images/icons/icon8.png'
import icon9 from './images/icons/icon9.png'
import icon10 from './images/icons/icon10.png'

export function ServicesLis(){
        return (
            <div>
             <Container className='servicesLis-continer'>
    <div className='column'>
        <Image className='icon1' src={icon1} />
        <p>Invigorating bath for a refreshing cleanse</p>
    </div>
    <div className='column'>
        <Image className='icon2' src={icon2} />
        <p>Gentle and thorough brushing</p>
    </div>
    <div className='column'>
        <Image className='icon3' src={icon3} />
        <p>Tender care for eyes and ears</p>
    </div>
    <div className='column'>
        <Image className='icon4' src={icon4} />
        <p>Precision hair trimming </p>
    </div>
    <div className='column'>
        <Image className='icon5' src={icon5} />
        <p>Nail trimming for paw perfection</p>
    </div>
    <div className='column'>
        <Image className='icon6' src={icon6} />
        <p>Enriching teeth brushing</p>
    </div>
    <div className='column'>
        <Image className='icon7' src={icon7} />
        <p>Deodorizing treatments for a delightful finish</p>
    </div>
    <div className='column'>
        <Image className='icon8' src={icon8} />
        <p>Expert de-shedding treatments</p>
    </div>
    <div className='column'>
        <Image className='icon9' src={icon9} />
        <p>Thoughtful anal gland expression</p>
    </div>
    <div className='column'>
        <Image className='icon10' src={icon10} />
        <p>Pampering specialty shampoos and skin therapy</p>
    </div>
</Container>           
            </div>
    )}

export default ServicesLis