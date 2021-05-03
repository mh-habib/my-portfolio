import React from 'react';
import portfolio1 from './../../../images/portfolio1.png';
import portfolio2 from './../../../images/portfolio2.png';
import portfolio3 from './../../../images/portfolio3.png';
import portfolio4 from './../../../images/portfolio4.png';
import portfolio5 from './../../../images/portfolio5.png';
import portfolio6 from './../../../images/portfolio6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SingleProject = () => {
    return (
        <div className="container">
            <div className="bg-light row shadow rounded p-4 my-5">
                <div className="col-md-5">
                    <img className="img-fluid mt-3 rounded" src={portfolio1} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h2 className="text-primary">e-Learning Web App</h2>
                    <p className="text-dark">
                        <strong>About Project:</strong>  This is a full stack web application with firebase authentication and interactive admin panel. Someone can order their required course, pay using a card and give review about the services. Admin can add or remove services, check and delete massages and manage service’s present status.
                    </p>
                    <p>
                        <strong>Used Technologies:</strong> HTML, CSS, React.js, Express.Js, Bootstrap, Mongo DB, Strip Payment system, Firebase Authentication, heroku hosting for server Site and firebase hosting for client site.
                    </p>
                    <a href="http://e-learning-85058.web.app/" target="_blank">
                        <button class="btn btn-sm btn-primary mr-3">Live Demo</button>
                    </a>
                    <a href="https://github.com/mh-habib/e-learning-client" target="_blank">
                        <button className="btn btn-sm btn-primary">View Code <FontAwesomeIcon icon={faGithub} /></button>
                    </a>
                </div>
            </div>
            <div className="bg-light row shadow rounded p-4 my-5">
                <div className="col-md-5">
                    <img className="img-fluid mt-3 rounded" src={portfolio2} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h2 className="text-primary">e-Commerce Web App</h2>
                    <p className="text-dark">
                        <strong>About Project:</strong> It’s a e-commerce application based on react.js, express.js and mongo DB where anyone can order their products by login using google account. Firebase authentication and hosting is used for client site and the server is hosted on heroku.
                    </p>
                    <p>
                        <strong>Used Technologies:</strong> HTML, CSS, React.js, Express.Js, Bootstrap, Mongo DB, Firebase Authentication, heroku hosting for server Site and firebase hosting for client site.
                    </p>
                    <a href="http://e-learning-85058.web.app/" target="_blank">
                        <button class="btn btn-sm btn-primary mr-3">Live Demo</button>
                    </a>
                    <a href="https://github.com/mh-habib/bd-shop-client" target="_blank">
                        <button className="btn btn-sm btn-primary">View Code <FontAwesomeIcon icon={faGithub} /></button>
                    </a>
                </div>
            </div>
            <div className="bg-light row shadow rounded p-4 my-5">
                <div className="col-md-5">
                    <img className="img-fluid mt-3 rounded" src={portfolio3} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h2 className="text-primary">Explore Football Club</h2>
                    <p className="text-dark">
                        <strong>About Project:</strong> It’s an online application to explore different football club where the club’s information are loaded using react.js from API. Here Bootstrap is used for responsiveness of the web site and the web site is hosted on netlify.
                    </p>
                    <p>
                        <strong>Used Technologies:</strong> HTML, CSS, React.js, Express.Js, Bootstrap, Mongo DB, Netlify hosting for client site.
                    </p>
                    <a href="https://brave-nightingale-b32458.netlify.app/" target="_blank">
                        <button class="btn btn-sm btn-primary mr-3">Live Demo</button>
                    </a>
                    <a href="https://github.com/mh-habib/football-clubs" target="_blank">
                        <button className="btn btn-sm btn-primary">View Code <FontAwesomeIcon icon={faGithub} /></button>
                    </a>
                </div>
            </div>
            <div className="bg-light row shadow rounded p-4 my-5">
                <div className="col-md-5">
                    <img className="img-fluid mt-3 rounded" src={portfolio4} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h2 className="text-primary">City Ride Tracker </h2>
                    <p className="text-dark">
                        <strong>About Project:</strong> It’s an online application to trace ride for moving in a city where the available rides information are loaded using Javascript using demo data. Here Bootstrap is used for responsiveness of the web site and the web site is hosted on netlify.
                    </p>
                    <p>
                        <strong>Used Technologies:</strong> HTML, CSS, React.js, Express.Js, Bootstrap, Mongo DB,  Firebase Authentication, Netlify hosting for client site.
                    </p>
                    <a href="https://city-ride-8889e.web.app/" target="_blank">
                        <button class="btn btn-sm btn-primary mr-3">Live Demo</button>
                    </a>
                    <a href="https://github.com/mh-habib/city-ride" target="_blank">
                        <button className="btn btn-sm btn-primary">View Code <FontAwesomeIcon icon={faGithub} /></button>
                    </a>
                </div>
            </div>
            <div className="bg-light row shadow rounded p-4 my-5">
                <div className="col-md-5">
                    <img className="img-fluid mt-3 rounded" src={portfolio5} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h2 className="text-primary">Search For Food</h2>
                    <p className="text-dark">
                        <strong>About Project:</strong> It’s an online application to explore different types of food where the food ingredients information are loaded using JavaScript from API. Here Bootstrap is used for responsiveness of the web site and the web site is hosted on netlify.
                    </p>
                    <p>
                        <strong>Used Technologies:</strong> HTML, CSS, Bootstrap, Mongo DB, GitHub hosting for client site.
                    </p>
                    <a href="https://mh-habib.github.io/assignment5/" target="_blank">
                        <button class="btn btn-sm btn-primary mr-3">Live Demo</button>
                    </a>
                    <a href="https://github.com/mh-habib/assignment5" target="_blank">
                        <button className="btn btn-sm btn-primary">View Code <FontAwesomeIcon icon={faGithub} /></button>
                    </a>
                </div>
            </div>
            <div className="bg-light row shadow rounded p-4 my-5">
                <div className="col-md-5">
                    <img className="img-fluid mt-3 rounded" src={portfolio6} alt="" />
                </div>
                <div className="col-md-7 align-self-center">
                    <h2 className="text-primary">Songs With Lyric</h2>
                    <p className="text-dark">
                        <strong>About Project:</strong> It’s an online application to explore different songs where the sons and song's lyrics are loaded using JavaScript from API. Here Bootstrap is used for responsiveness of the web site and the web site is hosted on netlify.
                    </p>
                    <p>
                        <strong>Used Technologies:</strong> HTML, CSS, Bootstrap, Mongo DB, GitHub hosting for client site.
                    </p>
                    <a href="https://mh-habib.github.io/hard-rock/" target="_blank">
                        <button class="btn btn-sm btn-primary mr-3">Live Demo</button>
                    </a>
                    <a href="https://github.com/mh-habib/hard-rock" target="_blank">
                        <button className="btn btn-sm btn-primary">View Code <FontAwesomeIcon icon={faGithub} /></button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;