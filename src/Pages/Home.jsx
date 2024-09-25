const Home = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#cdfcf6]">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm a MERN Developer</h1>
        <p className="text-xl text-gray-600 mb-8">Building full-stack web applications with MongoDB, Express, React, and Node.js.</p>
        <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          See My Work
        </a>
      </div>
    );
  }
  
  export default Home;
  