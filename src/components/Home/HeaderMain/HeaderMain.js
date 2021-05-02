import React from 'react';
import { useHistory } from 'react-router';
import titleImg from '../../../images/author.png';

const HeaderMain = () => {
    const history = useHistory();
    const handleStart = () => {

        history.push("/home");
    }
    return (
        <main style={{ height: '450px' }} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1 px-5">
                <h3 className="text-dark display-4"><strong>Hello, I'm</strong></h3>
                <h1 className="text-dark display-4"><strong>MD. HABIBULLAH</strong></h1>
                <h2 className="text-primary display-5">Web Developer</h2>
                <a href="https://drive.google.com/uc?export=download&id=1yTUs1eKNaIo4p7Nb81sAz-VODoBd2JOV">
                    <button className="btn btn-primary mt-5">GET MY RESUME</button>
                </a>
                
            </div>
            <div className="col-md-5">
                <img className="img-fluid rounded" src={titleImg} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;