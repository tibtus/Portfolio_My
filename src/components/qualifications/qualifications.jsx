import React from "react";
//styles
import "./qualifications.css";


const Qualifications = () => {
  return (
      <div>
        <span className="quali-text">My Qualifications</span>
        <div className="qualifications-container">
          <div className="qualification">
            <div className="content html"/>
            <h1>html</h1>
          </div>
          <div className="qualification">
            <div className="content css"/>
            <h1>css</h1>
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
            <div className="content c-plus-plus"/>
            <h1>c++</h1>
          </div>
          <div className="qualification">
            <div className="content c-sharp"/>
            <h1>c#</h1>
          </div>
          <div className="qualification">
            <div className="content kotlin"/>
            <h1>kotlin</h1>
          </div>
        </div>
      </div>
  );
};

export default Qualifications;
