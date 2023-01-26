import React, {useEffect, useState} from "react";
//styles
import "./project.css";
import CustomCarusel from "../custom/customCarusel/customCarusel";
import {FaTelegram} from "react-icons/fa";

const Project = ({className}) => {

    const [elements, setElements] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        const divElements = document.querySelectorAll(`.${className} .option`);
        const elementsArray = Array.from(divElements).map(w => <FaTelegram className="icon"/>);
        setElements(elementsArray);
    }, [className]);

    useEffect(() => {
        const divElements = document.querySelectorAll(`.${className} .option`);
        divElements.forEach((element, i) => {
            if (i === activeIndex) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });
    }, [activeIndex, className]);

    const handleSelect = (index) => {
        setActiveIndex(index);
    }

    return (
        <div style={{width: "100%"}}>
            <h1 className="member-txt">Project</h1>
            <CustomCarusel/>
            <div className="member-nav">
                {/*{activeIndex + 1}*/}
                <ul>
                    {elements.map((element, index) => (
                        <li key={index}
                            onClick={() => handleSelect(index)}>{element}</li>
                    ))}
                </ul>

            </div>
        </div>
    )

};

export default Project;
