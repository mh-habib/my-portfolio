import React from 'react';
import Skills from '../Home/Skills/Skills';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import resumeImage from './../../images/resume-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ResumePage = () => {
    return (
        <div className="home-bg">
            <Navbar></Navbar>
            <div className="bg-light">
                <div className="container">
                    <h1 className="text-primary text-center">RESUME</h1>


                    <div class="row d-flex align-items-center p-5">
                        <div class="text-center col-md-4">
                            <h2>MD. HABIBULLAH</h2>
                            <h3>Web Developer</h3>
                        </div>
                        <div class="col-md-3 text-center">
                            <img className="fluid" style={{ borderRadius: '50%' }} src={resumeImage} alt="..." />
                        </div>
                        <div class="col-md-5 text-center">
                            <h3>Contact Address</h3>
                            <p>Rangpur Division, Bangladesh</p>
                            <p>+8801737143821</p>
                            <p style={{ fontSize: '20px' }}>
                                <a href="http://github.com/mh-habib" target="_blank"><button className="btn btn-warning mr-3"><FontAwesomeIcon icon={faGithub} /></button></a>
                                <a href="http://linkedin.com/in/md-habibullah-habib-43016283" target="_blank"><button className="btn btn-warning"><FontAwesomeIcon icon={faLinkedinIn} /></button></a>                                
                            </p>
                        </div>
                    </div>


                </div>

            </div>
            <Skills></Skills>

            <div className="bg-light">
                <div class="container row d-flex justify-content-around p-5 m-auto">
                    <div class="text-center col-md-5 p-3 mr-2 card mt-2">
                        <h3>Academic Qualification:</h3>
                        <p>
                            M.Sc. in Information and Technology
                            Institute of Information Technology
                            Jahangirnagar University, Savar, Dhaka.
                        </p>
                    </div>
                    <div class="col-md-5 text-center p-3 card mt-2">
                        <h3>Professional Experience:</h3>
                        <p>
                            Assistant Programmer
                            UITRCE, BANBEIS, Ministry Of Education.
                            Joining Date: 20.06.2017-(Continuing)
                        </p>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ResumePage;