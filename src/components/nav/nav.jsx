import React from "react";
//styles
import "./nav.css";
//icons
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {TiGroupOutline} from "react-icons/ti";
import {BiMessageRoundedDots} from "react-icons/bi";
import {BsArrowDownCircle} from "react-icons/bs";


function Navbar() {


    let handleClick = (e) => {


        let foo = document.querySelectorAll(".navigation .icon");

        for (let i = 0; i < foo.length; i++) {
            foo[i].classList.remove("active-nav");

        }

        e.currentTarget.classList.add("active-nav");

    };


    return (
        <div className="navigation">
            <a href="#home">
                {/*<AiOutlineHome className="icon active-nav"/>*/}
                <AiOutlineHome className="icon active-nav" onClick={handleClick}/>

            </a>
            <a href="#about">
                {/*<AiOutlineUser className="icon"/>*/}
                <AiOutlineUser className="icon " onClick={handleClick}/>

            </a>
            <a href="#members">
                {/*<TiGroupOutline className="icon"/>*/}
                <TiGroupOutline className="icon " onClick={handleClick}/>

            </a>
            <a href="#contact">
                {/*<BiMessageRoundedDots className="icon"/>*/}
                <BiMessageRoundedDots className="icon " onClick={handleClick}/>

            </a>
            <a href="#footer">
                {/*<BsArrowDownCircle className="icon"/>*/}
                <BsArrowDownCircle className="icon " onClick={handleClick}/>

            </a>
        </div>
    );
}

export default Navbar;
