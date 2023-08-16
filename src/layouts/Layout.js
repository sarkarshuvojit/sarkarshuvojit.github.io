import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PanelContent from "../components/PanelContent";
import { aTagClick, customCursor, dataImage, sticky } from "../utilits";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Nav from "./Nav";
import Triggger from "./Triggger";

const Layout = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    dataImage();
    customCursor();
    aTagClick();
    window.addEventListener("scroll", sticky);
  });
  const triggerMenu = () => {
    setTrigger(!trigger);
    document.querySelector(".resumo_fn_wrapper").classList.toggle("nav-opened");
  };
  return (
    <Fragment>
      <Head>
        <title>Resumo Home | Personal Portfolio React NextJS Template</title>
      </Head>
      <div className="resumo_fn_wrapper">
        {/* MODALBOX */}
        {/* <Modalbox /> */}
        {/* /MODALBOX */}
        <div className="resumo_fn_content">
          {/* Main Left Part */}
          <div className="resumo_fn_left">
            {/* Page */}
            <div className="resumo_fn_page">{children}</div>
            {/* /Page */}
            <Footer />
          </div>
          {/* /Main Left Part */}
          {/* Main Right Part */}
          <div className="resumo_fn_right">
            {/* Menu Triggger */}
            <Triggger open={() => triggerMenu()} />
            {/* /Menu Triggger */}
            {/* Panel Content */}
            <PanelContent />
            {/* /Panel Content */}
          </div>
          {/* /Main Right Part */}
        </div>
        {/* Right Hidden Navigation */}
        <Nav close={() => triggerMenu()} trigger={trigger} />
        {/* /Right Hidden Navigation */}
        <Cursor />
      </div>
      {/* /Wrapper All */}
      {/* Scripts */}
      {/*[if lt IE 10]>  <![endif]*/}
      {/* /Scripts */}
    </Fragment>
  );
};

export default Layout;
