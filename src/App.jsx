import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skiils';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
    return (
        <Router>
            <div>
                {/* Navbar */}
                <Navbar />

                {/* Routes */}
                <main className="pt-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
