import React from 'react';
import './Services.css';
import image1 from './../../../images/services1.jpg';
import image2 from './../../../images/services2.jpg';
import image3 from './../../../images/services3.jpg';

const Services = () => {

    return (
        <section className="services bg-light py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h3 className="text-primary">Services I Offered</h3>
                </div>
                <div className="row justify-content-center py-3 px-3">
                    <div className="card card col-md-3 col-sm-12 card-body card shadow-sm m-3">
                        <img className="mx-3 reviewerImage" src={image1} alt="" />
                        <div className="card-footer text-center">
                            <h5 className="text-primary">Web Development</h5>
                            <p className="card-text">Create your website using react.js, node.js and mongo DB. it's simple. </p>
                        </div>
                    </div>
                    <div className="card card col-md-3 col-sm-12 card-body card shadow-sm m-3">
                        <img className="mx-3 reviewerImage" src={image2} alt="" />
                        <div className="card-footer  text-center">
                            <h5 className="text-primary">Responsive Design</h5>
                            <p className="card-text">I use basically bootstrap, react bootstrap material UI to make responsive website.</p>
                        </div>
                    </div>
                    <div className="card card col-md-3 col-sm-12 card-body card shadow-sm m-3">
                        <img className="mx-3 reviewerImage" src={image3} alt="" />
                        <div className="card-footer  text-center">
                            <h5 className="text-primary">Web Customization</h5>
                            <p className="card-text">I can customize your website as your requirements. Feel free to contact with me.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;