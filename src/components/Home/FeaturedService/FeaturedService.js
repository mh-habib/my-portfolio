import React from 'react';
import featured from '../../../images/featured.png'
const FeaturedService = () => {
    return (
    
            <div className="container my-5">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <img className="img-fluid mt-3 rounded" src={featured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h2 className="text-primary">React Based Web Application Provider</h2>
                        <p className="text-light">
                        Welcome to my React Creative studio, React Portfolio and Corporate Multi-Purpose Template. It comes with React and Bootstrap 4. We created with component-based and developer friendly modern pure JavaScript, not jQuery. Its comes with modern design and a faster loading react template. It has available Creative Agency, Creative Agency Landing, Personal Portfolio, Personal Portfolio Landing, Minimal Portfolio, Home Particles, Digital Agency, Business, Home Parallax, Startup, Studio Agency, Freelancer, Minimal Portfolio Parallax, and other needed inner or details pages availability.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
      
    );
};

export default FeaturedService;