import About from "../src/components/About";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Projects from "../src/components/Projects";
import Layout from "../src/layouts/Layout";
import { getAllPosts } from "../lib/posts";
import { getAllProjects } from "../lib/projects";


const Index = ({ posts, projects }) => {
  console.log("Render index");
  return (
      <Layout>
        <Home />
        {/* /Home Section */}
        {/* Projects Section */}
        <Projects projects={projects} />
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
        <News posts={posts} />
        {/* /News Section */}
      </Layout>
  );
};

export const getStaticProps = async () => {
  const [posts, projects] = await Promise.all([
    getAllPosts(),
    getAllProjects()
  ]);
  
  return { 
    props: {
      posts,
      projects
    }
  };
}

export default Index;
