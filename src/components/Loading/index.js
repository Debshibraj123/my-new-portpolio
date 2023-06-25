import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './style.css'

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <h2>Loading...</h2>
      <FaSpinner className="loading-icon" />
    </div>
  );
};

export default LoadingPage;

