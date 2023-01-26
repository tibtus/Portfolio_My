import React from "react"

//styles
import "./customCarusel.css";
//MUI

const CustomCarusel = () => {


    /* $(".option").click(function(){
         $(".option").removeClass("active");
         $(this).addClass("active");

     });*/


    return (
        <div className="bodyBlock">
            <div className="options">
                <div className="option active">
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-walking"></i>
                        </div>
                        <div className="info">
                            <div className="main">Blonkisoaz</div>
                            <div className="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-snowflake"></i>
                        </div>
                        <div className="info">
                            <div className="main">Oretemauw</div>
                            <div className="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-tree"></i>
                        </div>
                        <div className="info">
                            <div className="main">Iteresuselle</div>
                            <div className="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-tint"></i>
                        </div>
                        <div className="info">
                            <div className="main">Idiefe</div>
                            <div className="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div className="option"
                     style={{color: "red"}}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-sun"></i>
                        </div>
                        <div className="info">
                            <div className="main">Inatethi</div>
                            <div className="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default CustomCarusel;
