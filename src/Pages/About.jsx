const About = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white px-4">
        <h2 className="text-4xl font-bold mb-4 text-blue-600 animate-fade-in">About Me</h2>
        <p className="text-lg text-gray-600 max-w-3xl text-center transition-transform duration-500 hover:scale-105 animate-fade-in">
          I'm a passionate MERN stack developer with experience building dynamic, full-stack web applications. 
          I specialize in MongoDB, Express, React, and Node.js, with a strong focus on creating scalable and efficient solutions.
        </p>
        <div className="flex space-x-4 mt-6 animate-fade-in">
          <a href="#projects" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">View Projects</a>
          <a href="#contact" className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300">Get in Touch</a>
        </div>
      </div>
    );
  };
  
  export default About;
  