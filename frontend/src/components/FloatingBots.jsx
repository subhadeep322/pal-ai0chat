// src/components/FloatingBot.jsx
import React from 'react';
import './FloatingBots.css';

const FloatingBot = () => {
  return (
    <div className="floating-bot-container">
      <img
        src="/assets/images/pal-bot.png"
        alt="PAL Bot"
        className="floating-bot-image"
      />
    </div>
  );
};

export default FloatingBot;
