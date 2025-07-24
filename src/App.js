import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './config/Routes'; // Update the path as per your file structure
import './App.css';

export default function App() {
  useEffect(() => {
    document.title = 'AI Taxpert';
  }, []);

  return (
    <div className='App'>
      <AppRouter />
    </div>
  );
}
