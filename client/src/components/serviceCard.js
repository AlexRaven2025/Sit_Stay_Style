import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './stylefiles/serviceCard.css';

export function ServiceCard() {
    return (
        <Container fluid className='services-contaier-packages'>
            <Card className='card custom-omaga-card'>
                <Card.Body>
                    <Card.Title>Omaga package</Card.Title>
                    <Card.Text><i className="bi bi-dot"/>Revitalize with a soothing bath</Card.Text>
                    <Card.Text><i className="bi bi-dot"/>Tailored hair trim or indulgent brushing</Card.Text>
                    <Card.Text><i className="bi bi-dot"/>Plus, choose one (1) additional addon for the perfect touch</Card.Text>
                </Card.Body>
            </Card>

            <Card className='card custom-alpha-card'>
                <Card.Body>
                    <Card.Title>Alpha package</Card.Title>
                    <Card.Text><i className="bi bi-dot"/>Immerse in a spa-like bath</Card.Text>
                    <Card.Text><i className="bi bi-dot"/>Personalized hair trim or deluxe brushing</Card.Text>
                    <Card.Text><i className="bi bi-dot"/>Enjoy the indulgence of three (3) carefully chosen addons</Card.Text>
                </Card.Body>
            </Card>

            <Card className='card custom-bata-card'>
                <Card.Body>
                    <Card.Title>Bata package</Card.Title>
                    <Card.Text><i className="bi bi-dot"/>A luxurious bath experience</Card.Text>
                    <Card.Text><i className="bi bi-dot"/>Meticulous hair trim or lavish brushing</Card.Text>
                    <Card.Text><i className="bi bi-dot"/>Elevate your grooming with two (2) addon selections</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ServiceCard;