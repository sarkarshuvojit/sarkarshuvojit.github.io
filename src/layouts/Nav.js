import { Fragment, useEffect, useState } from "react";
import {Email, Github, Linkedin, Stackoverflow, Twitter} from "../components/Icons";
import texts from "../constants/texts";

const Nav = ({ close, trigger }) => {
  const [toggle_, setToggle_] = useState("");
  useEffect(() => {
    !trigger && setToggle_("");
    setTimeout(() => {
      trigger ? setToggle_("ready") : setToggle_("");
    }, 2000);
  }, [trigger]);

  return (
    <Fragment>
      <a href="#" className="resumo_fn_nav_overlay" onClick={() => close()} />
      <div className="resumo_fn_navigation">
        <a href="#" className="closer" onClick={() => close()} />
        {/* Navigation Content */}
        <div className="nav_in">
          <nav id="nav">
            <h3 className="label">Menu</h3>
            <ul>
              <li style={{ transitionDelay: !trigger ? "0ms" : "700ms" }}>
                <a href="#home" onClick={() => close()}>
                  Home
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "900ms" }}>
                <a onClick={() => close()} href="#about">
                  About
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1100ms" }}>
                <a onClick={() => close()} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1300ms" }}>
                <a onClick={() => close()} href="#services">
                  Services
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1500ms" }}>
                <a onClick={() => close()} href="#customers">
                  Customers
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1700ms" }}>
                <a onClick={() => close()} href="#news">
                  News &amp; Tips
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1900ms" }}>
                <a onClick={() => close()} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className={`nav_footer ${toggle_}`}>
            <div className="social">
              <ul>
                <li>
                  <a href={texts.urls.github} target="_blank">
                    <Github />
                  </a>
                </li>

                <li>
                  <a href={texts.urls.stackoverflow} target="_blank">
                    <Stackoverflow />
                  </a>
                </li>

                <li>
                  <a href={texts.urls.twitter} target="_blank">
                    <Twitter />
                  </a>
                </li>

                <li>
                  <a href={texts.urls.linkedin} target="_blank">
                    <Linkedin />
                  </a>
                </li>

                <li>
                  <a href={texts.urls.email} target="_blank">
                    <Email />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* /Navigation Content */}
      </div>
    </Fragment>
  );
};

export default Nav;
