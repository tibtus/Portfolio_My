//styles
import "./members.css";

const Members = () => {
  return (
      <div id="members" className="container members-container">
        <h1 className="member-txt">Courses</h1>

        <div className="member member-1">
          <div className="member-img"/>
          <div className="member-info">
            <h1 className="name">
              Course "Web Developer"

            </h1>
            <div className="position">UDEMY</div>
            <h3 className="period"> 04.2021 - 08.2021 ( 4 months ) </h3>
            <h4 className="about">
              HTML5 | CSS3 |
              Bootstrap 4/5 | FlexBox | CSS Grid |
              Mobile adaptation of sites and applications |
              Landing sites on CMS |
              Site speed optimization |
              Sass/Scss/Less preprocessors |
              BEM methodology |
              Automating processes using the Gulp task scheduler |
            </h4>
            <a href="#contact" className="contact-member">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-2">
          <div className="member-img"/>
          <div className="member-info">
            <h1 className="name">Course "Complete JavaScript + React"</h1>
            <h3 className="position">UDEMY</h3>
            <h3 className="period">
              08.2021 - 04.2022 ( 8 months )
            </h3>
            <h4 className="about">
              ES6+ | technologies AJAX, JSON |
              JSX, Error Boundaries |
              Render-props pattern |
              React + Redux |
              npm, Babel, Browserify, Webpack, Heroku, Firebase |
              React (Redux) |
              Git and GitHub |
              Promise (ES6) |
              Fetch API |
              Async/Await (ES8) |
              Jquery library |
              JS animation, requestAnimationFrame |
            </h4>
            <a href="#contact" className="contact-member">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-3">
          <div className="member-img"></div>
          <div className="member-info">
            <h1 className="name">Course "CMS WordPress"</h1>
            <h3 className="position">UDEMY</h3>
            <h3 className="period">
              08.2021 - 09.2021 ( 1 month )
            </h3>
            <h4 className="about">
              installation of the layout on the engine of the Wordpress site management system
              working with plugins for WP
              creating your own themes for Wordpress
              principles of work with site management systems (CMS)
              working with local servers and phpmyadmin
            </h4>
            <a href="#contact" className="contact-member">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-4">
          <div className="member-img"></div>
          <div className="member-info">
            <h1 className="name">Course "Practical JavaScript –
              Advanced Level" </h1>
            <h3 className="position">UDEMY</h3>
            <h3 className="period"> 10.2021 - 12.2021 ( 2 months )
            </h3>
            <h4 className="about">
              Сreating a JavaScript UI Library,
              Practice with OPP style
            </h4>
            <a href="#contact" className="contact-member">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <div className="member member-5">
          <div className="member-img"/>
          <div className="member-info">
            <h1 className="name"> Course "Node.js"
            </h1>
            <div className="position">UDEMY</div>
            <h3 className="period"> 06.2022 - 10.2022 ( 4 months ) </h3>
            <h4 className="about">
              from scratch,
              basics and application architecture
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
