import React, {useState} from "react";
//styles
import "./experience.css";


function Experience() {
    let [animation, setAnimation] = useState(true);
    let handleClick = (e) => {
        setAnimation(!animation);
    };
    //імпорт зоображення
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../props/experience/', false, /\.(png|jpe?g|svg)$/));
    //імпорт зоображення

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
                        <li style={{"background": `url(${images[0]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[1]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[2]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[3]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[4]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[5]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[6]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[7]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[8]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[9]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[10]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[11]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[12]}) center/cover no-repeat`,}}></li>
                    </ul>

                    <ul className="marquee__content">
                        <li style={{"background": `url(${images[0]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[1]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[2]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[3]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[4]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[5]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[6]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[7]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[8]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[9]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[10]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[11]}) center/cover no-repeat`,}}></li>
                        <li style={{"background": `url(${images[12]}) center/cover no-repeat`,}}></li>
                    </ul>


                </div>
            </section>
        </div>
    );
}

export default Experience;

