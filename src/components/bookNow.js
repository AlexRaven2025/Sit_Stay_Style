import React, { useState } from 'react';
import NavbarMain from './navbar';
import Foot from './footer';
import './stylefiles/bookNow.css';
import bookNow1 from './images/booknow1.jpeg';
import BookNowContactCard from './bookNowContactCard';
import { Button, Container, Form, FormControl } from 'react-bootstrap';

export function BookNow(){
    const [showModal, setShowModal] = useState(false);

    const showPopUp = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }
        return (
            <Container fluid className='main-bookNow-custom'>
                <NavbarMain/>
            <Container fluid className='left-aside-photo-booknow'>
                <img src={bookNow1} className="img-fluid custom-image1" alt="Responsive image"/>
            </Container>
                <Container fluid className='boknow-button'> <Button onClick={showPopUp}>BookNow</Button></Container>
                    <BookNowContactCard showModal={showModal} handleClose={handleClose} />
            <Container fluid className='socialmedia-links'> </Container>

            <Container fluid className='right-aside-booknow-photo'> </Container>

            <Container fluid className='trouble-message'> 
                <p>If you have any questions or encounter any issues with
our website, please don't hesitate to reach out to our friendly support team.
We're here to assist you and ensure your experience with us is smooth and
enjoyable.</p></Container>

            <Container fluid className='form-booknow'>
                <Form >
                    <Form.Group className='mb-3' controlId='formBasicName'>
                        <Form.Label>Name</Form.Label>
                        <FormControl type='email' placeholder='please Enter your Name' />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <FormControl type='email' placeholder='please Enter you Email' />
                        <Form.Text className='text-muted'>we'll never share your email with anyone else</Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='MessageDescription'>
                        <Form.Label>Message</Form.Label>
                        <FormControl type='email' placeholder='please Enter your message' />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </Container>







            <Foot />
            </Container>
        );
    
}

export default BookNow;