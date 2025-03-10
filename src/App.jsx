import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import AddBlog from './pages/AddBlog';

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addblog" element={<AddBlog />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
