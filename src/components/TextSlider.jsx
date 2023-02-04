import React, { useState, useEffect } from 'react';

function TextSlider() {
  const texts = [
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    'The only way to do great work is to love what you do.',
    'Success is not how high you have climbed, but how you make a positive difference to the world.',
    'The future belongs to those who believe in the beauty of their dreams.',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="flex text-light-gray w-[300px] mx-auto mt-6 italic">
      <p className="break-words text-center">
        <span>"</span>
        {texts[index]}
        <span>"</span>
      </p>
    </div>
  );
}
export default TextSlider;
