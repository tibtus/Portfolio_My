import React from "react";
//styles
import "./about.css";
//components
import Project from "../project/project";


function About() {
    return (
        <div id="about" className="container about-container">
            {/* <Qualifications/>*/}
            <Project/>
        </div>
    );
}

export default About;
