import React from 'react';
import NavbarMain from './navbar';
import Foot from './footer';
import './stylefiles/bookNow.css';
import { Container } from 'react-bootstrap';

export function BookNow() {
    return (
        <div className='main-bookNow-custom'>
            <NavbarMain />

            {/* Cover Background */}
            <div className="cover-background">
                <Container className='booknow-info'>
                    <h1>Welcome to Our Booking Page</h1>
                    <p>If you would like to book our services, please don't hesitate to get in touch with us. We're here to make your experience exceptional.</p>
                    
                    <div className="contact-details">
                        <p>Contact us at:</p>
                        <p>Phone: +123-456-7890</p>
                        <p>Email: info@example.com</p>
                    </div>
                </Container>
            </div>

            <Foot />
        </div>
    );
}

export default BookNow;
