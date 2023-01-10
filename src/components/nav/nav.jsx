import React, {useState} from "react";
//styles
import "./nav.css";
//icons
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {TiGroupOutline} from "react-icons/ti";
import {BiMessageRoundedDots} from "react-icons/bi";
import {BsArrowDownCircle} from "react-icons/bs";


function Navbar() {


    /*    let Icons = document.querySelectorAll('.navigation .icon');

        Icons.forEach((icon) => {
            icon.addEventListener('click', () => {
                changeActive();

                icon.classList.add('active-nav');
            });
        });

        function changeActive() {
            Icons.forEach((icon) => {
                icon.classList.remove('active-nav');
            });
        }*/

    const [activeState, setActiveState] = useState(false);
    let handleClick = () => {
        setActiveState(!activeState)
    };


    return (
        <div className="navigation">
            <a href="#home">
                {/*<AiOutlineHome className="icon active-nav"/>*/}
                <AiOutlineHome className={`icon ${activeState ? 'active-nav' : ''}`} onClick={handleClick}/>
            </a>
            <a href="#about">
                {/*<AiOutlineUser className="icon"/>*/}
                <AiOutlineUser className={`icon ${activeState ? 'active-nav' : ''}`} onClick={handleClick}/>
            </a>
            <a href="#members">
                {/*<TiGroupOutline className="icon"/>*/}
                <TiGroupOutline className={`icon ${activeState ? 'active-nav' : ''}`} onClick={handleClick}/>
            </a>
            <a href="#contact">
                {/*<BiMessageRoundedDots className="icon"/>*/}
                <BiMessageRoundedDots className={`icon ${activeState ? 'active-nav' : ''}`} onClick={handleClick}/>
            </a>
            <a href="#footer">
                {/*<BsArrowDownCircle className="icon"/>*/}
                <BsArrowDownCircle className={`icon ${activeState ? 'active-nav' : ''}`} onClick={handleClick}/>
            </a>
        </div>
    );
}

export default Navbar;
