import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import CustomerLight from "../src/components/CustomerLight";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Layout from "../src/layouts/Layout";

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("light");
  }, []);
  return (
    <Layout>
      <Home />
      {/* /Home Section */}
      {/* About Section */}
      <About />
      {/* /About Section */}
      {/* Portfolio Section */}
      <Portfolio />
      {/* /Portfolio Section */}
      {/* Services Section */}
      <Services />
      {/* /Services Section */}
      {/* Customers Section */}
      <CustomerLight />
      {/* /Customers Section */}
      {/* News Section */}
      <News />
      {/* /News Section */}
      {/* Contact Section */}
      <Contact />
      {/* /Contact Section */}
    </Layout>
  );
};

export default Index;
