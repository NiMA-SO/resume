import Heading from "../components/Heading";
import Seo from "../components/Seo";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="Projects "
        description="پروژه‌ها و نمونه‌کارهای نیما سهرابی در زمینه توسعه وب."
        canonical="projects"
      />
      <Heading text="Projects" />
    </div>
  );
};

export default Projects;
