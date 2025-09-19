// App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      {/* Fixed Navbar */}
      <Navbar className="fixed top-0 left-0 w-full z-50" />

      {/* Main content */}
      <div className="flex flex-col min-h-screen relative z-0 overflow-x-hidden">
        {/* Add padding-top equal to navbar height */}
        <main className="flex-grow pt-[80px] relative z-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* Floating Buttons */}
      <FloatingButtons />
    </>
  );
}

export default App;
