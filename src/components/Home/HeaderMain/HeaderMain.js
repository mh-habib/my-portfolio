import React from 'react';
import { useHistory } from 'react-router';
import titleImg from '../../../images/author.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';

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
                <h2 className="text-primary"><Typical
                    steps={[
                        'Hello', 1000,
                        'I am Md. Habibullah', 1000,
                        'I am a Web Developer', 1000,
                        'Feel Free To Contact With Me', 1000,
                        'For Any Work Order.', 1000
                ]}
                    loop={Infinity}
                    wrapper="b"
                /></h2> <br/>
                <a href="https://drive.google.com/uc?export=download&id=1yTUs1eKNaIo4p7Nb81sAz-VODoBd2JOV">
                    <button className="btn btn-primary mt-5">GET MY RESUME <FontAwesomeIcon icon={faDownload} /></button>
                </a>

            </div>
            <div className="col-md-5">
                <img className="img-fluid rounded" src={titleImg} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;