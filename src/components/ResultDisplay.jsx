import React from 'react';
import '../styles/ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert("결과가 클립보드에 복사되었습니다.");
  };

  return (
    <div className="result-display-container">
      <div className="result-content">
        <pre>{result}</pre>
      </div>
      <button onClick={handleCopy}>복사</button>
    </div>
  );
};

export default ResultDisplay;
