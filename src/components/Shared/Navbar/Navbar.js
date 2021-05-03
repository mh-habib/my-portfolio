import React from 'react';
import './Navbar.css';
import logo from './../../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="bg-light sticky-top">
            <div className="container d-sm-flex d-block text-center pt-4">
                <div className="p-2 flex-grow-1">
                    <img src={logo} className="title-logo float-sm-left" alt="logo" />
                </div>

                <nav className="nav">
                    <NavLink to="/home" className="nav-link" activeClassName="main-nav-active" href="#">Home </NavLink>
                    <NavLink to="/projects" className="nav-link" activeClassName="main-nav-active" >Projects</NavLink>
                    <NavLink to="/resume" className="nav-link" activeClassName="main-nav-active" >Resume</NavLink>                    
                    <NavLink to="/contact" className="nav-link" activeClassName="main-nav-active" >Contact</NavLink>
                    <a target="_blank" href="https://medium.com/" className="nav-link" activeClassName="main-nav-active" >Blog</a>
                </nav>

            </div>
        </section>
    );
};

export default Navbar;