import React from "react"

//styles
import "./customCarusel.css";
//MUI
// react icons
import {DiGit} from "react-icons/di";

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
                         onClick={handleClick}

                    >
                        <a
                            href="https://dpdmarket.com/"
                            target={"blank"}
                        >
                            <div className="shadow"></div>
                            <div className="label">
                                <DiGit className="icon"/>

                                <div className="info">
                                    <div className="main">DPD Market</div>
                                    <div className="sub">Technologies: JS, React.js, MUI 5, Node.js, MongoDB.</div>
                                </div>

                            </div>
                        </a>


                    </div>


                    <div className="option "
                         style={{"--optionBackground": `url(${images[1]}) center/cover no-repeat`}}
                         onClick={handleClick}
                    >
                        <a
                            href="https://google.com"
                            target={"blank"}
                        >
                            <div className="shadow"></div>
                            <div className="label">
                                <DiGit className="icon"/>

                                <div className="info">
                                    <div className="main">CreditBox</div>
                                    <div className="sub">Technologies: JS, React.js, MUI 4, Node.js, MongoDB.</div>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="option"
                         style={{"--optionBackground": `url(${images[2]}) center/cover no-repeat`}}
                         onClick={handleClick}
                    >

                        <a
                            href="http://berry-com.com/"
                            target={"blank"}
                        >
                            <div className="shadow"></div>
                            <div className="label">
                                <DiGit className="icon"/>

                                <div className="info">
                                    <div className="main">Business site - Berry</div>
                                    <div className="sub">Technologies: WordPress, JS, jQuery</div>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="option"
                         style={{"--optionBackground": `url(${images[3]}) center/cover no-repeat`}}
                         onClick={handleClick}
                    >
                        <a
                            href="https://belitrade.com/"
                            target={"blank"}
                        >
                            <div className="shadow"></div>
                            <div className="label">
                                <DiGit className="icon"/>

                                <div className="info">
                                    <div className="main">Business site - BeliTrade</div>
                                    <div className="sub">Technologies: HTML, SCSS, WordPress, JS, jQuery</div>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="option"
                         style={{"--optionBackground": `url(${images[4]}) center/cover no-repeat`}}
                         onClick={handleClick}
                    >
                        <a
                            href="https://github.com/tibtus/React_Marvel_Comics"
                            target={"blank"}
                        >
                            <div className="shadow"></div>
                            <div className="label">
                                <DiGit className="icon"/>

                                <div className="info">
                                    <div className="main">Comic Portal - React Marvel Comics</div>
                                    <div className="sub">Technologies: JS, React, SCSS, gulp, webpack.</div>
                                </div>

                            </div>
                        </a>
                    </div>


                    <div className="option"
                         style={{"--optionBackground": `url(${images[5]}) center/cover no-repeat`}}
                         onClick={handleClick}
                    >
                        <a
                            href="https://github.com/tibtus/lawyer-k"
                            target={"blank"}
                        >
                            <div className="shadow"></div>
                            <div className="label">
                                <DiGit className="icon"/>

                                <div className="info">
                                    <div className="main">Business card site - Lawyer-K</div>
                                    <div className="sub">Technologies: vanilla JS, ES6, SCSS, gulp, webpack.
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>


                    {/*<div className="option"
                         style={{"--optionBackground": `url(${images[1]}) center/cover no-repeat`}}
                         onClick={handleClick}
                    >
                        <a
                            href="https://google.com"
                            target={"blank"}
                        >
                            <div className="shadow"></div>
                            <div className="label">
                                <DiGit className="icon"/>

                                <div className="info">
                                    <div className="main">My WORK 7</div>
                                    <div className="sub">TEXT TEXT TEXT TEXT TEXT</div>
                                </div>

                            </div>
                        </a>
                    </div>*/}


                </div>

        </div>
        </>

    );
};

export default CustomCarusel;
