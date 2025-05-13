import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="App">
      <h1>Frontend connected to Backend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
