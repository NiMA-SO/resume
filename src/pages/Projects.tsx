import Heading from "../components/Heading";
import imgMovie from "./../assets/movie-hub.jpg";
import imgGame from "./../assets/game-hub.jpg";
import Seo from "../components/Seo";
import ProjectCard from "../components/projects/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Movie Hub",
      description: "A React-based movie browsing website.",
      link: "/Projects/movie",
      img: imgMovie,
      src: 'movie-hub-cyan.vercel.app'
    },
    {
      title: "Game Hub",
      description: "A React-based movie browsing website.",
      link: "/Projects/movie",
      img: imgGame,
      src: 'game-hub-three-iota-70.vercel.app'
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 bg-white">
      <Seo
        title="Projects "
        description="پروژه‌ها و نمونه‌کارهای نیما سهرابی در زمینه توسعه وب."
        canonical="projects"
      />
      <Heading text="My Projects" />
      <div className="flex flex-wrap justify-between items-center gap-[40px] px-4 my-10">
        <ProjectCard details={projects} />
      </div>
    </div>
  );
};

export default Projects;
