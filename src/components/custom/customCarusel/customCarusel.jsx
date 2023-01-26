import React from "react"

//styles
import "./customCarusel.css";
//MUI
// react icons
import {FaTelegram} from "react-icons/fa";
import {TfiAndroid, TfiHtml5, TfiLayoutGrid3Alt, TfiMicrosoftAlt} from "react-icons/tfi";

const CustomCarusel = () => {


    let handleClick = (e) => {

        let foo = document.querySelectorAll(".options .option");

        for (let i = 0; i < foo.length; i++) {

            foo[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");

    };


    return (
        <>
            <div className="bodyBlock" style={{width: "100%", border: "1px solid red"}}>

                <div className="options"

                >
                    <div className="option active"
                         style={{"--optionBackground": "url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)"}}

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
                     style={{"--optionBackground": "url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)"}}
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
                     style={{"--optionBackground": "url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)"}}
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
                     style={{"--optionBackground": "url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)"}}
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
                     style={{"--optionBackground": "url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg)"}}
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
            </div>


        </div>
        </>

    );
};

export default CustomCarusel;
