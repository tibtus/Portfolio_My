import React, {Suspense, useState} from "react";
//styles
import './home.css';
//components
import img from '../props/img2.jpg';
import Buttons from '../button/button';
//icons
import {BsMouse} from 'react-icons/bs';
import Preloader from "../Preloader/Preloader";
import Experience from "../experience/experience";
//Context
import MyContext from "../../context/context";


function Home() {

    const [activeState, setActiveState] = useState(false);
    let handleClick = () => {
        setActiveState(!activeState)
    };


    return (

        <MyContext.Consumer>
            {context => (
                <div id='home' className='container home-container'>
                    <div className='logo'>
                        <div className={`hover-show ${activeState ? 'active' : ''}`} onClick={handleClick}>
                            <span className='circle'/>
                            <span className='circle'/>
                            <span className='circle'/>
                            <span className='circle'/>
                            <span className='circle'/>
                            <span className='circle'/>
                            <span className='circle'/>
                            <span className='circle'/>
                        </div>

                        <img src={img} alt=' '/>
                    </div>

                    <a href='#footer' className='scroll-down'>
                        <hr/>
                        <h5>scroll down</h5>
                        <BsMouse className='scroll'/>
                        <hr/>
                    </a>

                    <h2>
                        <span>About Me</span> <br/>
                        <p>

                            I'm JavaScript Developer<br/> who works with the following technologies: JavaScript,
                            React.js, Material-UI, Node.js, and MongoDb.<br/><br/>
                            Before that, I have more than 10 years of experience as a system administrator and was
                            responsible for setting up and maintaining networks and servers, as well as managing the IT
                            department (more than 5 years).<br/>


                        </p>
                    </h2>

                    <Buttons/>
                    <Suspense fallback={<Preloader/>}>
                        <Experience/>
                    </Suspense>
                </div>
            )}
        </MyContext.Consumer>


    );
}

export default Home;
