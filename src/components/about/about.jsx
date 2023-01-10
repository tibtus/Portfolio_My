import React from "react";
//styles
import "./about.css";
//components
import Qualifications from "../qualifications/qualifications";


function About() {
    return (
        <div id="about" className="container about-container">
            <Qualifications/>
        </div>
    );
}

export default About;
