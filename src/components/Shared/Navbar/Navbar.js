import React from 'react';
import './Navbar.css';
import logo from './../../../images/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="bg-light sticky-top">
            <div className="container d-sm-flex d-block text-center pt-4">
                <div className="p-2 flex-grow-1">
                    <img src={logo} className="title-logo float-sm-left" alt="logo" />
                </div>

                <nav className="nav">
                    <Link to="/home" className="nav-link active" href="#">Home </Link>
                    <Link to="/projects" className="nav-link" >Projects</Link>
                    <Link to="/resume" className="nav-link" >Resume</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

            </div>
        </section>
    );
};

export default Navbar;