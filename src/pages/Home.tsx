import Heading from "../components/Heading";
import Contact from "../components/home/Contact";
import Introduction from "../components/home/Introduction";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Wellcome from "../components/home/Wellcome";
import Seo from "../components/Seo";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="Home"
        description="Welcome to my personal website! Discover my skills, projects, and professional journey as a front-end developer dedicated to creating interactive and responsive web experiences."
        canonical=""
        keywords="Nima Sohrabi, نیما سهرابی, Nima Sohrabi Front-End Developer, نیما سهرابی توسعه‌دهنده فرانت‌اند, Personal Website Nima Sohrabi, Portfolio Nima Sohrabi, React Developer Nima Sohrabi, HTML, CSS, JavaScript, Nima Sohrabi Projects"
      />
      <Heading text="Home" />
      <div className="md:px-8">
        <Wellcome />
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
