import React from "react";
//styles
import "./experience.css";


const sections = document.querySelectorAll("section");

[...sections].forEach((section) => {
    const checkbox = section.querySelector("input");

    checkbox.addEventListener("change", () => {
        section.classList.toggle("enable-animation");
    });
});


function Experience() {
    return (
        <div id="experience" className="container experience-container">
            <section>
                <h2>Fit content + position absolute :last-child</h2>
                <input id="enable-animation-5" type="checkbox"/>
                <label htmlFor="enable-animation-5">Enable animation</label>

                <div className="marquee marquee--fit-content marquee--pos-absolute">
                    <ul className="marquee__content">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>

                    <ul aria-hidden="true" className="marquee__content">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>

            </section>
        </div>
    );
}

export default Experience;

