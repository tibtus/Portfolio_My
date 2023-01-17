import React, {useState} from "react";
//styles
import "./qualifications.css";
//styles
import "../button/button.css";
//imgProject Qualifications
import imgProject from "../props/project/project0.jpg"

const BlockQualifications = ({block}) => {
    let {name, nameDescription, linkHref, linkName, linkImg} = block;
    const styles = {
        background: `rgba(255, 255, 255, 0.103) url(${linkImg}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

    return (
        <div className="qualification">
            <h1>{name}</h1>
            <div className="content" style={styles}/>
            <h2>{nameDescription}</h2>
            <a href={linkHref}>
                <h4> {linkName} </h4>
            </a>
        </div>
    )

}

const Qualifications = () => {
    let [qualifications, setQualifications] = useState(true);

    let handleClick = (e) => {
        setQualifications(!qualifications);
        if (e.currentTarget.classList.value === "arrow-left") {
            console.log("LEFT",)
        } else if (e.currentTarget.classList.value === "arrow-right") {
            console.log("RIGHT",)
        }
    };


    let arrQualifications = [
        {
            name: "nameHTML",
            nameDescription: "nameDescription",
            linkHref: "https://google.com",
            linkName: "linkName",
            linkImg: `${imgProject}`
        },
        {
            name: "materialui",
            nameDescription: "nameDescription",
            linkHref: "https://google.com",
            linkName: "linkName",
            linkImg: `${imgProject}`
        },
        {
            name: "JS",
            nameDescription: "nameDescription",
            linkHref: "https://google.com",
            linkName: "linkName",
            linkImg: `${imgProject}`
        },
        {
            name: "bootstrap",
            nameDescription: "nameDescription",
            linkHref: "https://google.com",
            linkName: "linkName",
            linkImg: `${imgProject}`
        },
    ];


    /*console.log("Block", Block)*/


    return (
        <div>
            <div className="quali-block ">
                <div className="quali-text ">
                    <div>My projects</div>
                </div>

                <div className="none-block">
                </div>

          <div className="arrow-block">
              <div className="arrow-left" onClick={handleClick}>
                  <div>Left</div>
              </div>
              <div className="arrow-right" onClick={handleClick}>
                  <div>Right</div>
              </div>
          </div>

        </div>

            <div className="qualifications-container">
                <BlockQualifications block={arrQualifications[0]}/>
                <BlockQualifications block={arrQualifications[1]}/>
                <BlockQualifications block={arrQualifications[2]}/>
                {/*<div className="qualification">
            <h1>Name</h1>
            <div className="content materialui"/>
            <h2>material ui</h2>
            <a href="https://google.com">
              <h4> Link </h4>
            </a>
          </div>*/}

            </div>

        </div>
  );
};

export default Qualifications;
