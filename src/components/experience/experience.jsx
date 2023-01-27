import React, {useState} from "react";
//styles
import "./experience.css";


function Experience() {
    let [animation, setAnimation] = useState(true);
    let handleClick = (e) => {
        setAnimation(!animation);
    };

    return (
        <div id="experience" className="container experience-container">
            <section onClick={handleClick} className={animation ? "enable-animation" : ""}>
                {/*<h2>Fit content</h2>
                <button style={{"color": "black"}} onClick={handleClick}>
                    {animation ? "STOP" : "PLAY"}
                </button>
                <label htmlFor="enable-animation-4">Enable animation</label>*/}

                <div className="marquee marquee--fit-content">
                    <ul className="marquee__content">
                        <li>JS</li>
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

