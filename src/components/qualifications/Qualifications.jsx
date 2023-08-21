import React from "react";
import "./Qualifications.css";
const Qualifications = () => {
  return (
    <sections className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Educational Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button qualification__active
            button--flex"
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualifications__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Becholars of computer science
                </h3>
                <span className="qualification__sutitle">
                  Comsats university Islamabad, Abbottabad{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-present
                </div>
                <br/>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* ............................... */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Pre-Engineering</h3>
                <span className="qualification__sutitle">
                  F.G girls inter college Abbottabad{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-present
                </div>
                <br />
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </sections>
  );
};

export default Qualifications;
