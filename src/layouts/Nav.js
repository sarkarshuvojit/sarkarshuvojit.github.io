import { Fragment, useEffect, useState } from "react";
import Socials from "../components/Socials";


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
                <a onClick={() => close()} href="#projects">
                  Projects
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1100ms" }}>
                <a onClick={() => close()} href="#about">
                  About & Career
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1300ms" }}>
                <a onClick={() => close()} href="#news">
                  Blogs
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1500ms" }}>
                <a onClick={() => close()} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className={`nav_footer ${toggle_}`}>
            <Socials />
          </div>
        </div>

        {/* /Navigation Content */}
      </div>
    </Fragment>
  );
};

export default Nav;
