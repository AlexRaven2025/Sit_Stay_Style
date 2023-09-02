import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './stylefiles/bookNowContactCard.css';
/* eslint-disable */
export function BookNowContactCard({ showModal, handleClose }) {
    return (
        <div>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Important Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        For the well-being of all pets in our care,</p>
                    <p> we kindly request that all first-time customers provide proof of up-to-date vaccinations upon their visit.</p>
                    <p> Additionally, please be aware that our grooming prices may vary depending on factors such as breed type and the condition of your pet's coat.</p>
                    <p>In cases where extra time and effort are required due to matting or special requirements, the grooming price may be adjusted accordingly.</p> 
                    <p>Rest assured, our priority is to ensure your pet's comfort and style,</p> 
                    <p>and our dedicated groomers will always work diligently to provide the best grooming experience.</p>
                   
                    <p>
                        Blank Number: ________
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BookNowContactCard;