import React, { useState, useEffect } from 'react';

const TypingFadeIn = ({ text, speed = 30, className = '' }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`${className} ${done ? 'fade-in-done' : ''}`} style={{ opacity: done ? 1 : 0.7, transition: 'opacity 0.5s' }}>
      {displayed}
    </span>
  );
};

export default TypingFadeIn; 