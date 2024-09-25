const Skills = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-600 animate-fade-in">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
        
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 animate-fade-in">
            <h3 className="text-xl font-semibold text-center">MongoDB</h3>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 animate-fade-in">
            <h3 className="text-xl font-semibold text-center">Express.js</h3>
          </div>
  
        
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 animate-fade-in">
            <h3 className="text-xl font-semibold text-center">React.js</h3>
          </div>
  
    
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 animate-fade-in">
            <h3 className="text-xl font-semibold text-center">Node.js</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  