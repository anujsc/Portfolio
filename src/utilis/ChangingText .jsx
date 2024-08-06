import React, { useState, useEffect } from 'react';

const ChangingText = () => {
  const texts = ["Websites","Landing pages","Animated Webs"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="about text-[#d1e8e2] text-[5.8vh] opacity-70 font-thin tracking-tighter ">
      {texts[currentIndex]}
    </div>
  );
};

export default ChangingText;
