import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './stylefiles/footericon.css'
/* eslint-disable */
export  function Foot(){
    
        return (
            <div>
                <footer className="fixed-bottom bg-dark text-white">
                        <div className="container-fluid text-center py-3">
                            <p>&copy; 2023 Sit Stay Style. All rights reserved.</p>
                        
                            <div className="d-flex  custom-footer-icon">
                                <i className="bi bi-facebook me-3 "></i>
                                <i className="bi bi-twitter me-3"></i>
                                <i className="bi bi-instagram me-3"></i>
                                <i className="bi bi-google me-3"></i>
                            </div>
                        </div>        
                </footer>
            </div>
        );
}

export default Foot