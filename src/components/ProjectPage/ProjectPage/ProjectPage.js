import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ProjectSlideShow from '../ProjectSlideShow/ProjectSlideShow';
import SingleProject from '../SingleProject/SingleProject';

const ProjectPage = () => {
    return (
        <div className="home-bg">
            <Navbar></Navbar>
            <ProjectSlideShow></ProjectSlideShow>
            <SingleProject></SingleProject>
            <Footer></Footer>
        </div>
    );
};

export default ProjectPage;