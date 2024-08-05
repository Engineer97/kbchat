import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-button">
        <Link to="/employee">
          <button>행원용</button>
        </Link>
      </div>
      <div className="home-button">
        <Link to="/developer">
          <button>개발자용</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
