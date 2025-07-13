import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PanelContent from "../components/PanelContent";
import texts from "../constants/texts";
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
        <title>Shuvojit Sarkar - Backend Engineer & Software Developer</title>
        <meta name="description" content="Backend engineer specializing in distributed systems, APIs, and scalable architectures. Experienced in Go, Python, JavaScript, DevOps, and cloud technologies." />
        <meta name="keywords" content="Shuvojit Sarkar, backend engineer, software developer, full stack developer, distributed systems, APIs, Go, Python, JavaScript, React, DevOps, cloud computing, software engineering" />
        <meta name="author" content="Shuvojit Sarkar" />
        
        <meta property="og:title" content="Shuvojit Sarkar - Backend Engineer & Software Developer" />
        <meta property="og:description" content="Backend engineer specializing in distributed systems, APIs, and scalable architectures. Experienced in Go, Python, JavaScript, DevOps, and cloud technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sarkarshuvojit.github.io" />
        <meta property="og:image" content="https://sarkarshuvojit.github.io/img/dp_hd.png" />
        <meta property="og:site_name" content="Shuvojit Sarkar Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shuvojit Sarkar - Backend Engineer & Software Developer" />
        <meta name="twitter:description" content="Backend engineer specializing in distributed systems, APIs, and scalable architectures. Building scalable solutions with modern technologies." />
        <meta name="twitter:image" content="https://sarkarshuvojit.github.io/img/dp_hd.png" />
        <meta name="twitter:creator" content="@sarkarshuvojit" />
        <meta name="twitter:site" content="@sarkarshuvojit" />
        
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Shuvojit Sarkar",
            jobTitle: "Backend Engineer",
            description: "Backend engineer specializing in distributed systems, APIs, and scalable architectures",
            url: "https://sarkarshuvojit.github.io",
            image: "https://sarkarshuvojit.github.io/img/dp_hd.png",
            sameAs: [
              "https://github.com/sarkarshuvojit",
              "https://linkedin.com/in/sarkarshuvojit",
              "https://twitter.com/sarkarshuvojit",
              "https://stackoverflow.com/users/2976015/shuvojit"
            ],
            knowsAbout: [
              "Backend Development",
              "Distributed Systems",
              "API Design",
              "DevOps",
              "Cloud Computing",
              "Software Engineering",
              "Go Programming",
              "Python",
              "JavaScript"
            ],
            worksFor: {
              "@type": "Organization",
              name: "Software Engineering"
            }
          })}
        </script>
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
