import React from 'react';
import Contact from '../Home/Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const ContactPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ContactPage;