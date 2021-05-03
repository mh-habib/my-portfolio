import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import portfolio1 from './../../../images/portfolio1.png';
import portfolio2 from './../../../images/portfolio2.png';
import portfolio3 from './../../../images/portfolio3.png';
import portfolio4 from './../../../images/portfolio4.png';
import portfolio5 from './../../../images/portfolio5.png';
import portfolio6 from './../../../images/portfolio6.png';


const ProjectSlideShow = () => {
    return (
        <div className="bg-light shadow rounded container">
            <Carousel className=" mt-5 " infiniteLoop useKeyboardArrows autoPlay showArrows={false}>
                <div>
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-6">
                            <h1>e-Learning Web App</h1>
                            <p></p>
                            <a href="http://e-learning-85058.web.app/" target="_blank">
                                <button class="btn btn-warning">Live Demo</button>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <img className="fluid" src={portfolio1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-6">
                            <h1>e-Commerce Web App</h1>
                            <p></p>
                            <a href="http://e-learning-85058.web.app/" target="_blank">
                                <button class="btn btn-warning">Live Demo</button>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <img src={portfolio2} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-6">
                            <h1>Explore Football Club</h1>
                            <p></p>
                            <a href="https://brave-nightingale-b32458.netlify.app/" target="_blank">
                                <button class="btn btn-warning">Live Demo</button>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <img src={portfolio3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-6">
                            <h1>Trace Available Ride</h1>
                            <p></p>
                            <a href="https://city-ride-8889e.web.app/" target="_blank">
                                <button class="btn btn-warning">Live Demo</button>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <img src={portfolio4} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-6">
                            <h1>Search Your Favorite Food</h1>
                            <p></p>
                            <a href="https://mh-habib.github.io/assignment5/" target="_blank">
                                <button class="btn btn-warning">Live Demo</button>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <img src={portfolio5} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row d-flex align-items-center p-5">
                        <div class="col-md-6">
                            <h1>Find Songs with Lyric</h1>
                            <p></p>
                            <a href="https://mh-habib.github.io/hard-rock/" target="_blank">
                                <button class="btn btn-warning">Live Demo</button>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <img className="d-block w-100 fluid" src={portfolio6} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default ProjectSlideShow;