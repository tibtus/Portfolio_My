import React, {useState} from "react";
//styles
import './home.css';
//components
import img from '../props/img2.jpg';
import Buttons from '../button/button';
//icons
import {BsMouse} from 'react-icons/bs';


function Home() {

    const [activeState, setActiveState] = useState(true);
    let handleClick = () => {
        setActiveState(!activeState)
    };


    return (
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
                    In my work as a developer, I use such languages and technologies as JavaScript, React.js,
                    Material-UI, Node.js, MongoDb. <br/>
                    I have more than 5 years of team management experience in areas such as HelpDesk and system
                    administration of servers and networks, more than 10 years as a system administrator. <br/>
                    I have been working as a full-time developer since May 2022 for a product company that independently
                    develops all software for its financial products. <br/>

                </p>
            </h2>

            <Buttons/>
        </div>
    );
}

export default Home;
