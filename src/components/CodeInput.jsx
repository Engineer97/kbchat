import React, { useState } from 'react';
import '../styles/CodeInput.css';

const CodeInput = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(code);
  };

  return (
    <div className="code-input-container">
      <form onSubmit={handleSubmit}>
        <button type="submit">도와줘</button>
        <textarea 
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="코드를 입력하세요"
        />
      </form>
    </div>
  );
};

export default CodeInput;


