import Typewriter from "typewriter-effect";

const HeaderSkills = () => {
  return (
    <div className=" font-semibold -tracking-tighter underline decoration-dashed underline-offset-8 capitalize decoration-[#00c49f] decoration-2 text-[16px]">
      <Typewriter
        options={{
          strings: [
            "Front-End Developer",
            "React Specialist",
            "JavaScript Specialist",
            "UI/UX Designer",
            "CSS Expert",
            "TypeScript Enthusiast",
            "Responsive Designer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default HeaderSkills;
