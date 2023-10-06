import React, { useState, useEffect } from "react";

const WordCarousel = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const messages = [
    {
      title: "Local Real Estate Experts",
      message: "#1 Agents | St. Joseph County & More",
    },
    { title: "Welcome To:", message: "Brick Built Real Estate | Ortiz Team" },
    { title: "Title 3", message: "Message 3" },
    { title: "Title 4", message: "Message 4" },
    { title: "Title 5", message: "Message 5" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMessage((currentMessage + 1) % messages.length);
        setIsTransitioning(false);
      }, 500); // wait for half of the interval before switching message
    }, 4000); // change message every 2 seconds
    return () => clearInterval(timer);
  }, [currentMessage, messages.length]);

  return (
    <div
      style={{
        transition: "opacity 0.5s ease-in-out",
        opacity: isTransitioning ? 0 : 1,
        color: "white",
        fontFamily: "'Saira Condensed', sans-serif",
        paddingTop: "10rem",
      }}
    >
      <h5>{messages[currentMessage].title}</h5>
      <h1
        style={{
          fontWeight: "bold",
        }}
      >
        {messages[currentMessage].message}
      </h1>
    </div>
  );
};

export default WordCarousel;
