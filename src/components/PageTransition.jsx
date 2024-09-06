// src/components/PageTransition.jsx
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const transitionRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      transitionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );
  }, [location]);

  return <div ref={transitionRef}>{children}</div>;
};

export default PageTransition;
