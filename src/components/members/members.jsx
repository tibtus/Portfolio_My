//styles
import "./members.css";

const Members = () => {
  return (
      <div id="members" className="container members-container">
        <h1 className="member-txt">Courses</h1>
        <div className="member member-1">
          <div className="member-img"/>
          <div className="member-info">
            <h1 className="name"> Course "Node.js"
            </h1>
            <h3 className="position">UDEMY</h3>
            <h3 className="period"> 06.2022 - 10.2022 (4 months) </h3>
            <h4 className="about">
              - from scratch,
              basics and application architecture
            </h4>
            <a href="#contact" className="contact-member">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-2">
          <div className="member-img"/>
          <div className="member-info">
            <h1 className="name">Name</h1>
            <h3 className="position">UDEMY</h3>
            <h3 className="period"> 2021 - 2021 </h3>
            <h4 className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              maiores harum laborum vero recusandae? Cumque nam facere aspernatur
              autem eius!
            </h4>
            <a href="#contact" className="contact-member">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-3">
          <div className="member-img"></div>
          <div className="member-info">
            <h1 className="name">Name</h1>
            <h3 className="position">UDEMY</h3>
            <h3 className="period"> 2021 - 2021 </h3>
            <h4 className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              maiores harum laborum vero recusandae? Cumque nam facere aspernatur
              autem eius!
            </h4>
            <a href="#contact" className="contact-member">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-4">
          <div className="member-img"></div>
          <div className="member-info">
            <h1 className="name">Name</h1>
            <h3 className="position">UDEMY</h3>
            <h3 className="period"> 2021 - 2021 </h3>
            <h4 className="about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              maiores harum laborum vero recusandae? Cumque nam facere aspernatur
              autem eius!
            </h4>
            <a href="#contact" className="contact-member">
              <span>Certificate</span>
            </a>
          </div>
        </div>


      </div>
  );
};

export default Members;
