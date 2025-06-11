import React, { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    show && (
      <button className="scroll-top-btn" onClick={scrollToTop} title="Back to Top">
        ↑
      </button>
    )
  );
}

export default ScrollToTopButton;
