import React from 'react';
import './Projects.css';
import image11 from './../../../images/portfolio1.png';
import image12 from './../../../images/portfolio2.png';
import image13 from './../../../images/portfolio3.png';
import image14 from './../../../images/portfolio4.png';
import image15 from './../../../images/portfolio5.png';
import image16 from './../../../images/portfolio6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h3 className="text-primary">My Resent Works</h3>
            </div>
            <div className="row justify-content-center py-3 px-3">

                <div className="card col-md-4 col-lg-3 col-sm-5 m-3 text-center shadow">
                    <div className="inner">
                        <img src={image11} className="card-img-top img-size" alt="..." />
                    </div>
                    <div className=" d-flex justify-content-between card-footer bg-white text-center border-0 pb-3">
                        
                        <button className="btn btn-primary btn-sm"> See Details <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                </div>

                <div className="card col-md-4 col-lg-3 col-sm-5 m-3 text-center shadow">
                    <div className="inner">
                        <img src={image12} className="card-img-top img-size" alt="..." />
                    </div>
                    <div className=" d-flex justify-content-between card-footer bg-white text-center border-0 pb-3">
                        
                        <button className="btn btn-primary btn-sm"> See Details <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                </div>

                <div className="card col-md-4 col-lg-3 col-sm-5 m-3 text-center shadow">
                    <div className="inner">
                        <img src={image13} className="card-img-top img-size" alt="..." />
                    </div>
                    <div className=" d-flex justify-content-between card-footer bg-white text-center border-0 pb-3">
                        
                        <button className="btn btn-primary btn-sm"> See Details <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                </div>

                <div className="card col-md-4 col-lg-3 col-sm-5 m-3 text-center shadow">
                    <div className="inner">
                        <img src={image14} className="card-img-top img-size" alt="..." />
                    </div>
                    <div className=" d-flex justify-content-between card-footer bg-white text-center border-0 pb-3">
                        
                        <button className="btn btn-primary btn-sm"> See Details <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                </div>

                <div className="card col-md-4 col-lg-3 col-sm-5 m-3 text-center shadow">
                    <div className="inner">
                        <img src={image15} className="card-img-top img-size" alt="..." />
                    </div>
                    <div className=" d-flex justify-content-between card-footer bg-white text-center border-0 pb-3">
                        
                        <button className="btn btn-primary btn-sm"> See Details <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                </div>

                <div className="card col-md-4 col-lg-3 col-sm-5 m-3 text-center shadow">
                    <div className="inner">
                        <img src={image16} className="card-img-top img-size" alt="..." />
                    </div>
                    <div className=" d-flex justify-content-between card-footer bg-white text-center border-0 pb-3">
                        
                        <button className="btn btn-primary btn-sm"> See Details <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;