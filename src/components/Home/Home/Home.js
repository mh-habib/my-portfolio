import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import FeaturedService from '../FeaturedService/FeaturedService';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className="home-bg">
            <Header></Header>
            <FeaturedService></FeaturedService>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;