import React, { useState } from 'react';
import { sendMessageToPAL } from '../api';

const synth = window.speechSynthesis;

const Chat = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 0.7;
    utterance.voice = synth.getVoices().find(v => v.name.includes('Google') || v.name.includes('Microsoft'));
    synth.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const newChat = [...chat, { type: 'user', text: input }];
    setChat(newChat);
    setInput('');

    try {
      const res = await sendMessageToPAL(input);
      const palReply = res.data.response;

      setChat([...newChat, { type: 'pal', text: palReply }]);
      speak(palReply);
    } catch (err) {
      const error = 'PAL AI failed to reply.';
      setChat([...newChat, { type: 'pal', text: error }]);
    }
  };

  return (
    <div className="chat-container glitch-bg">
      <h2>🤖 Chat with PAL</h2>
      <div className="chat-box">
        {chat.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Say something to PAL..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
