import React from 'react';
import NavbarMain from './navbar';
import Foot from './footer';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './stylefiles/services.css';
import ServiceCard from './serviceCard';
/* eslint-disable */
export function Services(){
        return (
            <div className='main-services-container'>
                <NavbarMain/> 
              
                <Container fluid className='services-contaier-packages'>
                       <ServiceCard />

                </Container>
        <Container fluid className='custom-list-container'>
            <Row className='services-row'>
                <Col md={6}>
                    <ListGroup as="ol"  className='custom-group-services'>
                        <ListGroup.Item><i className="bi bi-dot"/>Invigorating bath for a refreshing cleanse </ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Gentle and thorough brushing</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Tender care for eyes and ears</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Precision hair trimming </ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Nail trimming for paw perfection</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Enriching teeth brushing</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Deodorizing treatments for a delightful finish</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={6}>
                    <ListGroup as="ol" className='custom-group2-services'>
                        <ListGroup.Item><i className="bi bi-dot"/>Expert de-shedding treatments</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Thoughtful anal gland expression</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Gentle dematting treatments</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Pampering specialty shampoos and skin therapy,</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Including scented, hypoallergenic, and skin condition-focused options</ListGroup.Item>
                        <ListGroup.Item><i className="bi bi-dot"/>Flea treatments for lasting comfort</ListGroup.Item>
                        
                    </ListGroup>
                </Col>
            </Row>
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