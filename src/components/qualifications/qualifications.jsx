import React, {useState} from "react";
//styles
import "./qualifications.css";
//styles
import "../button/button.css";
//imgProject Qualifications
import imgProjectOne from "../props/project/project0.jpg"
import imgProjectTwo from "../props/project/project1.jpg"
import imgProjectFree from "../props/project/project2.jpg"
import imgProjectFour from "../props/project/project3.jpg"


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
    let [qualifications, setQualifications] = useState(0);

    let handleClick = (e) => {

        if (e.currentTarget.classList.value === "arrow-left") {
            setQualifications(qualifications - 1);
        } else if (e.currentTarget.classList.value === "arrow-right") {
            setQualifications(qualifications + 1);
        }
    };

    console.log("qualifications", qualifications)

    let arrQualifications = [
        {
            name: "nameHTML",
            nameDescription: "nameDescription",
            linkHref: "https://google.com",
            linkName: "linkName",
            linkImg: ` ${imgProjectOne ? imgProjectOne : ''}`
        },
        {
            name: "materialui",
            nameDescription: "nameDescription",
            linkHref: "https://google.com",
            linkName: "linkName",
            linkImg: `${imgProjectTwo ? imgProjectTwo : ''}`
        },
        {
            name: "JS",
            nameDescription: "nameDescription",
            linkHref: "https://google.com",
            linkName: "linkName",
            linkImg: `${imgProjectFree ? imgProjectFree : ''}`
        },
        {
            name: "Bootstap",
            nameDescription: "nameDescription",
            linkHref: "https://google.com",
            linkName: "linkName",
            linkImg: `${imgProjectFour ? imgProjectFour : ''}`
        },

    ];



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
                <BlockQualifications block={arrQualifications[3]}/>
            </div>

        </div>
  );
};

export default Qualifications;
