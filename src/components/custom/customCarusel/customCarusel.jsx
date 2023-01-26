import React from "react"

//styles
import "./customCarusel.css";
//MUI
// react icons
import {FaTelegram} from "react-icons/fa";
import {TfiAndroid, TfiHtml5, TfiLayoutGrid3Alt, TfiMicrosoftAlt} from "react-icons/tfi";


const CustomCarusel = () => {
    //імпорт зоображення
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../../props/project/', false, /\.(png|jpe?g|svg)$/));
    //імпорт зоображення

    let handleClick = (e) => {

        let foo = document.querySelectorAll(".options .option");

        for (let i = 0; i < foo.length; i++) {

            foo[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");

    };

    return (
        <>
            <div className="bodyBlock" style={{width: "100%"}}>

                <div className="options"
                >
                    <div className="option active"
                         style={{"--optionBackground": `url(${images[0]}) center/cover no-repeat`}}
                        /*style={{background: `url(${bgImage}) center/cover no-repeat`}}*/
                         onClick={handleClick}>
                        <div className="shadow"></div>
                        <div className="label">
                            <TfiLayoutGrid3Alt className="icon"/>
                            <div className="info">
                                <div className="main">My WORK 1</div>
                                <div className="sub">TEXT TEXT TEXT TEXT TEXT</div>
                            </div>
                        </div>
                    </div>

                <div className="option "
                     style={{"--optionBackground": `url(${images[1]}) center/cover no-repeat`}}
                     onClick={handleClick}
                >
                    <div className="shadow"></div>
                    <div className="label">
                        <FaTelegram className="icon"/>
                        <div className="info">
                            <div className="main">My WORK 2</div>
                            <div className="sub">TEXT TEXT TEXT TEXT TEXT</div>
                        </div>
                    </div>
                </div>
                <div className="option"
                     style={{"--optionBackground": `url(${images[2]}) center/cover no-repeat`}}
                     onClick={handleClick}
                >

                    <div className="shadow"></div>
                    <div className="label">
                        <TfiHtml5 className="icon"/>
                        <div className="info">
                            <div className="main">My WORK 3</div>
                            <div className="sub">TEXT TEXT TEXT TEXT TEXT</div>
                        </div>
                    </div>
                </div>
                <div className="option"
                     style={{"--optionBackground": `url(${images[3]}) center/cover no-repeat`}}
                     onClick={handleClick}
                >
                    <div className="shadow"></div>
                    <div className="label">

                        <TfiAndroid className="icon"/>
                        <div className="info">
                            <div className="main">My WORK 4</div>
                            <div className="sub">TEXT TEXT TEXT TEXT TEXT</div>
                        </div>
                    </div>
                </div>
                <div className="option"
                     style={{"--optionBackground": `url(${images[4]}) center/cover no-repeat`}}
                     onClick={handleClick}
                >
                    <div className="shadow"></div>
                    <div className="label">
                        <TfiMicrosoftAlt className="icon"/>
                        <div className="info">
                            <div className="main">My WORK 5</div>
                            <div className="sub">TEXT TEXT TEXT TEXT TEXT</div>
                        </div>
                    </div>
                </div>


                    <div className="option"
                         style={{"--optionBackground": `url(${images[0]}) center/cover no-repeat`}}
                         onClick={handleClick}
                    >
                        <div className="shadow"></div>
                        <div className="label">
                            <TfiMicrosoftAlt className="icon"/>
                            <div className="info">
                                <div className="main">My WORK 6</div>
                                <div className="sub">TEXT TEXT TEXT TEXT TEXT</div>
                            </div>
                        </div>
                    </div>


                    <div className="option"
                         style={{"--optionBackground": `url(${images[1]}) center/cover no-repeat`}}
                         onClick={handleClick}
                    >
                        <div className="shadow"></div>
                        <div className="label">
                            <TfiMicrosoftAlt className="icon"/>
                            <div className="info">
                                <div className="main">My WORK 6</div>
                                <div className="sub">TEXT TEXT TEXT TEXT TEXT</div>
                            </div>
                        </div>
                    </div>


                </div>

        </div>
        </>

    );
};

export default CustomCarusel;
