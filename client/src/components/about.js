// import React from 'react';
// import NavbarMain from './navbar';
// import Foot from './footer';
// import yuriah1 from './images/yuriah1.jpg';
// import './stylefiles/about.css';
// import { Container } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image';

// export function About(){
//         return (
//             <div className='container-fluid main-about-container'>
//                 <NavbarMain />
//                 <Container fluid className='custom-about-section'>
//                     <h1>About Sit Stay Styles</h1>
                    
//                     <Image src={yuriah1} fluid className='custom-image-about1'/>
//                     <p>With a grooming journey that spans over 13 enriching years,
//                         I am proud to offer a wealth of experience that truly understands the needs of
//                         our beloved pets. With a remarkable 13+ years of specializing in dog grooming
//                         and an impressive 3+ years of dedicated cat grooming, my expertise has evolved
//                         alongside the unique requirements of each furry companion.</p>
//                         <p>But what sets me apart is the artistry I bring to each grooming session. I am not just a groomer;
//                             I am a creator of custom grooms and haircuts that reflect your pet's personality. 
//                             From intricate designs to bold dyes, every stroke of the scissors and brush is a testament to my 
//                             dedication to making your pet stand out with style. And there's more – my commitment extends beyond just  aesthetics.
//                              All the dyes I use are vegan, ensuring that your pet's well-being is as much a priority as their looks.</p>
//                              <p>I've had the privilege of receiving training from the distinguished Blake Hernandez, 
//                                 a renowned show groomer whose talents have graced a Netflix show. As the proud owner of Foxy Roxy,
//                                  Blake brings a wealth of expertise that has not only honed my skills but also deepened my passion for delivering exceptional </p>
//                                  <p>grooming experiences. From tail-wagging dogs to curious cats, my dedication remains unwavering – to ensure every pet leaves not
//                                      just looking their best, but feeling their best, in a unique style that's as cruelty-free as it is creative.</p>
                                     
//                 </Container>
//                 <Foot />
//             </div>
//         );
    
// }

// export default About;


import React from 'react';
import NavbarMain from './navbar';
import Foot from './footer';
import yuriah1 from './images/yuriah1.jpg';
import './stylefiles/about.css';
import { Container, Col, Row, Image } from 'react-bootstrap';

export function About() {
    return (
        <div className='main-about-container'>
            <NavbarMain />
            <Container fluid className='custom-about-section'>
                <h1>About Sit Stay Styles</h1>
                <Row>
                    <Col md={6}>
                        <p>
                            With over 13 enriching years of grooming experience, we understand the unique needs of our beloved pets. Our expertise covers both dog and cat grooming, ensuring your furry companions receive the best care.
                        </p>
                        <p>
                            What sets us apart is the artistry we bring to each grooming session. We create custom grooms and haircuts that reflect your pet's personality, making them stand out with style. Our commitment extends beyond aesthetics as we use vegan products for the well-being of your pets.
                        </p>
                        <p>
                            We've received training from renowned show groomer Blake Hernandez, which has honed our skills and deepened our passion for exceptional grooming. Your pets will not only look their best but also feel their best, in a unique style that's as cruelty-free as it is creative.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image src={yuriah1} fluid className='custom-image-about1' alt="Yuriah Image" />
                    </Col>
                </Row>
            </Container>
            <Foot />
        </div>
    );
}

export default About;

