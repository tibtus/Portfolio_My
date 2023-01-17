import React from "react";
//styles
import "./nav.css";
//icons
import {FcGraduationCap, FcHome, FcInternal, FcLinux, FcPhone, FcRating} from "react-icons/fc";
import {DiJavascript1,} from "react-icons/di";


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
                <FcHome className="icon active-nav" onClick={handleClick}/>

            </a>
            <a href="#about">
                <FcRating className="icon " onClick={handleClick}/>

            </a>
            <a href="#members">
                <FcGraduationCap className="icon " onClick={handleClick}/>

            </a>
            <a href="#footer">
                <DiJavascript1 className="icon " onClick={handleClick}/>

            </a>
            <a href="#footer">
                <FcLinux className="icon " onClick={handleClick}/>

            </a>

            <a href="#contact">
                <FcPhone className="icon " onClick={handleClick}/>

            </a>
            <a href="#footer">
                <FcInternal className="icon " onClick={handleClick}/>

            </a>
        </div>
    );
}

export default Navbar;
