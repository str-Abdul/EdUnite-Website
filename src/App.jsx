import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+923700340788?text=Hi! I'm interested in finding a tutor through Edunite. Can you help me?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-0 bg-transparent shadow-none hover:scale-110 transition-all duration-200 z-20"
        aria-label="Contact us on WhatsApp"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
          alt="WhatsApp Logo" 
          className="h-12 w-12 object-contain"
        />
      </a>

      {/* Floating Call Button - Only on Mobile */}
      <a
        href="tel:+923130228488"
        className="fixed bottom-24 right-6 p-0 bg-transparent shadow-none hover:scale-110 transition-all duration-200 z-20 md:hidden"
        aria-label="Call Us"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
          alt="Call Icon"
          className="h-12 w-12 object-contain"
        />
      </a>
    </div>
  );
}

export default App;
