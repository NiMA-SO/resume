const IframeBody = () => {
  return (
    <div className="p-8 bg-gray-100 text-gray-800 mb-6 cursor-pointer">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Game Hub - A Stylish Platform for Gaming Enthusiasts
        </h1>
        <p className="text-lg text-gray-500">
          Built with HTML, React, Tailwind CSS, and Framer Motion
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
          <p className="text-gray-600">
            "Game Hub" is a comprehensive platform for game enthusiasts,
            designed to showcase and review games. Built with React, it
            leverages Tailwind CSS for modern, stylish layouts and Framer Motion
            to add smooth, engaging animations.
          </p>
        </article>

        <article className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>React: For building a dynamic user interface</li>
            <li>Tailwind CSS: For sleek, responsive styling</li>
            <li>Framer Motion: For smooth, engaging animations</li>
          </ul>
        </article>

        <article className="p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Smooth transition animations between pages</li>
            <li>Responsive layout for a seamless experience on all devices</li>
            <li>Hover effects on game cards for an immersive feel</li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default IframeBody;
