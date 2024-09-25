const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
      <h2 className="text-4xl font-bold mb-8 text-blue-600 animate-fade-in">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
      
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Project 1</h3>
          <p className="text-gray-600 mb-4">
            A description of your project with links to the GitHub repo or live demo.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
        </div>

    
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Project 2</h3>
          <p className="text-gray-600 mb-4">
            A description of your project with links to the GitHub repo or live demo.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
        </div>

    
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Project 3</h3>
          <p className="text-gray-600 mb-4">
            A description of your project with links to the GitHub repo or live demo.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
        </div>

        
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Project 4</h3>
          <p className="text-gray-600 mb-4">
            A description of your project with links to the GitHub repo or live demo.
          </p>
          <a href="#" className="text-blue-500 hover:underline">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
