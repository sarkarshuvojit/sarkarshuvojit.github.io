import { useState } from "react";
import experience from "../constants/experience";
import { Download } from "./Icons";
import texts from "../constants/texts";


const Experience = ({ e }) => {
  return <li>
    <div className="item">
      <div className="item_top">
        <h5 style={{textTransform: "unset"}}>{e.companyName}</h5>
        <span>( {e.timeFrame} )</span>
      </div>
      <h3>{e.role}</h3>
      <ul style={{listStyleType: "circle"}}>
        {e.description && e.description.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
      <div className="item_bottom">
      {e.technologies.map( (t, i) => <span key={i} className="techItem">{t}</span>)}
      </div>
    </div>
  </li>
}

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
              <div className="resume_download_btn">
                <a href={texts.urls.resume} target="_blank" download className="resume-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', padding: '5px 16px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '15px'}}>
                  <Download />
                  <span>Resume</span>
                </a>
              </div>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    {experience.fulltime && experience.fulltime.map((e, i) => <Experience key={i} e={e} />)}
                    <li key="line-break"><hr className="hr-text" data-content="Internship/Part-time During College"/></li>
                    {experience.parttime && experience.parttime.map((e, i) => <Experience key={i} e={e} />)}
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5 style={{textTransform: "unset"}}>Techno India, Satltlake (MAKAUT)</h5>
                          <span>( 2015 — 2018 )</span>
                        </div>
                        <h4>Bachelor of Computer Applications</h4>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5 style={{textTransform: "unset"}}>Maria's Day School (CISCE)</h5>
                          <span>( 2015 )</span>
                        </div>
                        <h4>PCM + Computer Science</h4>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={80}>
                    <div className="item_in">
                      <h3 className="progress_title">Backend Engineering</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "20%" }}
                      >
                        80%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "80%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={60}>
                    <div className="item_in">
                      <h3 className="progress_title">DevOps</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "40%" }}
                      >
                        60%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "60%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={50}>
                    <div className="item_in">
                      <h3 className="progress_title">Frontend</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "50%" }}
                      >
                        50%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "50%" }} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
