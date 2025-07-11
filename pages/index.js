import About from "../src/components/About";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Projects from "../src/components/Projects";
import Layout from "../src/layouts/Layout";


const Index = () => {
  console.log("Render index");
  return (
      <Layout>
        <Home />
        {/* /Home Section */}
        {/* Projects Section */}
        <Projects />
        {/* /Projects Section */}
        {/* About Section */}
        <About />
        {/* /About Section */}
        {/* Portfolio Section */}
        {/* <Portfolio /> */}
        {/* /Portfolio Section */}
        {/* Services Section */}
        {/* <Services /> */}
        {/* /Services Section */}
        {/* Customers Section */}
        {/* <Customers /> */}
        {/* /Customers Section */}
        {/* News Section */}
        <News />
        {/* /News Section */}
      </Layout>
  );
};

export const getStaticProps= async () => {
  return { props: {}};
}

export default Index;
