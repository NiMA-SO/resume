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
        description="صفحه اصلی وب‌سایت نیما سهرابی، توسعه‌دهنده فرانت‌اند."
        canonical=""
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
