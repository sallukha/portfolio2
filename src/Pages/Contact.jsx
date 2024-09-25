const Contact = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="w-full max-w-lg space-y-6">
          <input
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  