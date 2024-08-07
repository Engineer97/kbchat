import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../styles/Home.css';


const Home = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        // `${backendUrl}/api/user/login`,
        // `userid=${encodeURIComponent(employeeId)}&password=${encodeURIComponent(password)}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "ngrok-skip-browser-warning": true,
          },
        }
      );

      if (response.status === 200) {
        console.log("Login successful");
        sessionStorage.setItem("employeenumber", employeeId);
        // navigate("/home");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="home-container">
      <h1>로그인</h1>
      <div className="login-form">
        <div className="input-group">
          <label htmlFor="employeeId">사원번호</label>
          <input 
            type="text" 
            id="employeeId" 
            value={employeeId} 
            onChange={(e) => setEmployeeId(e.target.value)} 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default Home;
