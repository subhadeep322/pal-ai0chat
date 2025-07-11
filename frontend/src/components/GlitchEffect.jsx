import React from 'react';
import './GlitchEffect.css';

const GlitchEffect = ({ text }) => {
  return (
    <div className="glitch-effect" data-text={text}>
      {text}
    </div>
  );
};

export default GlitchEffect;
