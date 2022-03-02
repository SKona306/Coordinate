import React from 'react';
import Signup from './components/auth/Signup'
import SplashPage from './components/home/SplashPage';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <>
    <SplashPage />
    <Signup />
    <Login />
    </>
    
  );
}

export default App;
