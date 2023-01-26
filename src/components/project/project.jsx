import React, {useEffect, useState} from "react";
//styles
import "./project.css";
import CustomCarusel from "../custom/customCarusel/customCarusel";


const Project = ({className}) => {
    const [elements, setElements] = useState([]);
    /* const [activeIndex, setActiveIndex] = useState(null);*/

    /*const divElements = document.querySelectorAll(`.${propsClass} .option`);*/
    const divElements = document.querySelectorAll(`.options .option`);

    useEffect(() => {
        const elementsArray = Array.from(divElements).map(element => element.textContent);
        setElements(elementsArray);
    }, [divElements]);

    const handleSelect = (index) => {
        /*setActiveIndex(index);*/
        divElements.forEach((element, i) => {
            if (i === index) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });
    }

    return (
        <div style={{width: "100%"}}>
            <h1 className="member-txt">Project</h1>
            <CustomCarusel/>
            <div className="member-nav">

                <ul>
                    {elements.map((element, index) => (
                        <li key={index} onClick={() => handleSelect(index)}>{element}</li>
                    ))}
                </ul>

            </div>
        </div>
    )

};

export default Project;
