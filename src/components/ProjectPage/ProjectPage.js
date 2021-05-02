import React from 'react';
import Projects from '../Home/Projects/Projects';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const ProjectPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default ProjectPage;