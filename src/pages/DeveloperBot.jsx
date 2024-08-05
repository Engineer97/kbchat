import React, { useState } from 'react';
import CodeInput from '../components/CodeInput';
import ResultDisplay from '../components/ResultDisplay';
import '../styles/DeveloperBot.css';

const DeveloperBot = () => {
  const [result, setResult] = useState('');

  const handleCodeSubmit = async (code) => {
    // 여기에 API 호출 및 결과 처리 로직을 추가하세요
    const response = "예시 코드 리뷰 및 컨벤션 결과";  // 실제 API 호출로 대체
    setResult(response);
  };

  return (
    <div className="bot-container">
      <div>
        <h1>개발자용 챗봇 입니다</h1>
      </div>
      <div className="content">
        <div className="input-section">
          <CodeInput onSubmit={handleCodeSubmit} />
        </div>
        <div className="result-section">
          <ResultDisplay result={result} />
        </div>
      </div>
    </div>
  );
};

export default DeveloperBot;
