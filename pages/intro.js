import Head from "next/head";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import Cursor from "../src/layouts/Cursor";
import { customCursor } from "../src/utilits";

const Intro = () => {
  useEffect(() => {
    customCursor();
    document.querySelector("body").classList.add("light");
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Resumo Intro | Personal Portfolio React NextJS Template</title>
      </Head>
      <div className="resumo_fn_intro">
        <div className="divider"></div>
        <div className="intro_content">
          <div className="title_holder">
            <h3>
              <Link href="/intro">Resumo</Link>
            </h3>
            <p>Creative personal website template</p>
          </div>
          <div className="v_list">
            <div className="left">
              <Link href="/index-light">
                <a target="_blank"></a>
              </Link>
              <img src="img/intro/light.jpg" alt="" />
              <span>Light Version</span>
            </div>
            <div className="right dark-section">
              <Link href="/">
                <a target="_blank"></a>
              </Link>
              <img src="img/intro/dark.jpg" alt="" />
              <span>Dark Version</span>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div className="footer_content">
            <p>
              Copyright © {new Date().getFullYear()}. All rights reserved.{" "}
              <br />
              Designed &amp; Developed by{" "}
              <a
                className="fn__link"
                href="https://themeforest.net/user/trendycoder"
                target="_blank"
                rel="noreferrer"
              >
                TrendyCoder
              </a>
            </p>
          </div>
        </footer>
      </div>
      <Cursor />
    </Fragment>
  );
};

export default Intro;
