import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
    return (
        <footer className="py-3" style={{ color: 'white', backgroundColor: '#4169E1' }}>
            <div className="container text-center">
                {/* Quick Links Section */}
                <div className="mb-2">
                    <a href="#" className="text-white text-decoration-none mx-2">Home</a>
                    <a href="#" className="text-white text-decoration-none mx-2">About</a>
                    <a href="#" className="text-white text-decoration-none mx-2">Services</a>
                    <a href="#" className="text-white text-decoration-none mx-2">Contact</a>
                </div>

                {/* Social Media Icons Section */}
                <div className="mb-2">
                    <a href="#" className="text-white mx-2" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-white mx-2" aria-label="Twitter">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-white mx-2" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-white mx-2" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>

                {/* Copyright Section */}
                <div>
                    <p className="mb-0">&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
