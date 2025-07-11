import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = 0.5;      // Set initial volume to 50%
    audioRef.current.loop = true;        // Enable looping
  }, []);

  const toggleMusic = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="music-toggle">
      <button onClick={toggleMusic}>
        {playing ? '🔇 Stop Theme' : '🎵 Play Theme'}
      </button>
      <audio ref={audioRef} loop>
        <source src="/assets/sounds/glitch-alert.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicPlayer;
