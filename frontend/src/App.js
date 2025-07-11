import React from 'react';
import Header from './components/Header';
import GlitchEffect from './components/GlitchEffect';
import Chat from './components/Chat';
import Quiz from './components/Quiz';
import MusicPlayer from './components/MusicPlayer';
import './styles/main.css';
import FloatingBots from './components/FloatingBots';
function App() {
  return (
    <div className="App">
      <FloatingBots />
      <Header />

      <img
        src="/assets/images/pal-logo.png"
        alt="PAL AI"
        className="pal-logo"
      />

      <MusicPlayer />

      <GlitchEffect text="⚠️ PAL IS WATCHING YOU ⚠️" />

      <Chat />
      <Quiz />

      <img
        src="/assets/images/mitchell-family.png"
        alt="Mitchells"
        className="mitchell-family"
      />
    </div>
  );
}

export default App;
