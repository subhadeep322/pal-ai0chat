import React, { useState } from 'react';

const questions = [
  {
    q: 'What do you do when Wi-Fi is down?',
    a: ['Panic', 'Meditate', 'Self-destruct'],
  },
  {
    q: 'What’s 5 + 2?',
    a: ['7', '0101', 'PIZZA'],
  },
  {
    q: 'How often do you blink?',
    a: ['Every 4s', 'Never', 'When programmed'],
  },
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState('');

  const submitQuiz = () => {
    const score = Object.values(answers).filter((a) => a === 'PIZZA' || a === 'Self-destruct').length;
    setResult(score > 1 ? "You might be a robot 🤖" : "You're probably human 🧠");
  };

  return (
    <div className="quiz-container">
      <h2>🧪 Are You Human?</h2>
      {questions.map((q, idx) => (
        <div key={idx}>
          <p>{q.q}</p>
          {q.a.map((a) => (
            <label key={a}>
              <input
                type="radio"
                name={`q${idx}`}
                value={a}
                onChange={() => setAnswers({ ...answers, [idx]: a })}
              />
              {a}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz}>Submit</button>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default Quiz;
