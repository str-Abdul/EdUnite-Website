// FloatingButtons.jsx
import { createPortal } from 'react-dom';

const FloatingButtons = () => {
  return createPortal(
    <>
      <a
        href="https://wa.me/+923700340788"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 p-0 bg-transparent hover:scale-110 transition-all duration-200 z-[9999]"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png" 
          alt="WhatsApp" 
          className="h-12 w-12 object-contain" 
        />
      </a>

      <a
        href="tel:+923700340788"
        className="fixed bottom-20 right-6 p-0 bg-transparent hover:scale-110 transition-all duration-200 z-[9999] md:hidden"
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/128/724/724664.png" 
          alt="Call" 
          className="h-12 w-12 object-contain" 
        />
      </a>
    </>,
    document.body // portal root
  );
};

export default FloatingButtons;
