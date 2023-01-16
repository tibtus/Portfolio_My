import React from "react";
//styles
import "./experience.css";


function Experience() {

    const sections = document.querySelector("section");

    console.log("sections", sections)

    sections.addEventListener("mouseover", () => {

        sections.classList.remove("enable-animation");


    });


    return (
        <div id="experience" className="container experience-container">
            <section className="enable-animation">
                <h2>Fit content</h2>
                <input id="enable-animation-4 " type="checkbox"/>
                <label htmlFor="enable-animation-4">Enable animation</label>

                <div className="marquee marquee--fit-content">
                    <ul className="marquee__content">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>

                    <ul className="marquee__content">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                    </ul>


                </div>
            </section>
        </div>
    );
}

export default Experience;

