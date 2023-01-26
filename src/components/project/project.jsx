import React, {useEffect, useState} from "react";
//styles
import "./project.css";
import CustomCarusel from "../custom/customCarusel/customCarusel";


const Project = ({className}) => {

    const [elements, setElements] = useState([]);

    useEffect(() => {
        const divElements = document.querySelectorAll(`.${className} .option`);
        const elementsArray = Array.from(divElements).map(element => element.textContent);
        setElements(elementsArray);
    }, [className]);

    console.log(className)
    return (
        <div style={{width: "100%"}}>
            <h1 className="member-txt">Project</h1>
            <CustomCarusel/>
            <div className="member-nav">

                <ul>
                    {elements.map((element, index) => (
                        <li key={index}>{element} </li>
                    ))}
                </ul>

            </div>
        </div>
    )

};

export default Project;
