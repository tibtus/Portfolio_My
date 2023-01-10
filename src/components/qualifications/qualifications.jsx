import React from "react";
//styles
import "./qualifications.css";
//styles
import "../button/button.css";


const Qualifications = () => {
  return (
      <div>
        <div className="quali-text ">
          <div>My projects</div>
        </div>
        <div className="qualifications-container">
          <div className="qualification">
            <div className="content htmlcss"/>
            <h1>html css</h1>
          </div>
          <div className="qualification">
            <div className="content materialui"/>
            <h1>material ui</h1>
          </div>
          <div className="qualification">
            <div className="content javascript"/>
            <h1>javascript</h1>
          </div>
          <div className="qualification">
            <div className="content bootstrap"/>
            <h1>bootstrap</h1>
          </div>
          <div className="qualification">
            <div className="content react"/>
            <h1>react</h1>
          </div>
          <div className="qualification">
            <div className="content mongo.db"/>
            <h1>mongo.db</h1>
          </div>
          <div className="qualification">
            <div className="content node.js"/>
            <h1>node.js</h1>
          </div>
          <div className="qualification">
            <div className="content redux"/>
            <h1>redux</h1>
          </div>
        </div>
      </div>
  );
};

export default Qualifications;
