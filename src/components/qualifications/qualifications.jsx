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
            <h1>Name</h1>
            <div className="content htmlcss"/>
            <h2>html css</h2>
            <h4> Link </h4>
          </div>
          <div className="qualification">
            <h1>Name</h1>
            <div className="content materialui"/>
            <h2>material ui</h2>
            <h4> Link </h4>
          </div>
          <div className="qualification">
            <h1>Name</h1>
            <div className="content javascript"/>
            <h2>javascript</h2>
            <h4> Link </h4>
          </div>
          <div className="qualification">
            <h1>Name</h1>
            <div className="content bootstrap"/>
            <h2>bootstrap</h2>
            <h4> Link </h4>
          </div>
          <div className="qualification">
            <h1>Name</h1>
            <div className="content react"/>
            <h2>react</h2>
            <h4> Link </h4>
          </div>
          <div className="qualification">
            <h1>Name</h1>
            <div className="content mongo.db"/>
            <h2>mongo.db</h2>
            <h4> Link </h4>
          </div>
          <div className="qualification">
            <h1>Name</h1>
            <div className="content node.js"/>
            <h2>node.js</h2>
            <h4> Link </h4>
          </div>
          <div className="qualification">
            <h1>Name</h1>
            <div className="content redux"/>
            <h2>redux</h2>
            <h4> Link </h4>
          </div>
        </div>
      </div>
  );
};

export default Qualifications;
