import React, { useState } from 'react';

const Games = () => {
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('easy');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!language) {
      alert('Please enter a programming language.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, level }),
      });

      const data = await response.json();
      const content = data.content || 'No questions generated.';
      setQuestions(content.split('\n\n')); // split into separate blocks
    } catch (error) {
      console.error('Error generating quiz:', error);
      setQuestions(['Failed to generate questions. Please try again.']);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>AI Quiz Game</h1>

      <div style={{ marginBottom: '1.5rem' }}>
        <label>
          <strong>Programming Language:</strong><br />
          <input
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="e.g. Python"
            style={{ padding: '0.5rem', width: '100%', marginTop: '0.5rem' }}
          />
        </label>

        <div style={{ marginTop: '1rem' }}>
          <strong>Difficulty:</strong><br />
          {['easy', 'medium', 'hard'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(lvl)}
              style={{
                marginRight: '0.5rem',
                padding: '0.5rem 1rem',
                backgroundColor: level === lvl ? '#4f46e5' : '#eee',
                color: level === lvl ? '#fff' : '#000',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            >
              {lvl}
            </button>
          ))}
        </div>

        <button
          onClick={generateQuiz}
          disabled={loading}
          style={{
            marginTop: '1rem',
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#4f46e5',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {loading ? 'Generating...' : 'Generate Quiz'}
        </button>
      </div>

      {questions.length > 0 && (
        <div>
          {questions.map((q, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '1rem',
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                backgroundColor: '#f9f9f9',
              }}
            >
              {q}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Games;
