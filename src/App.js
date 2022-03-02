import React from 'react';
import Signup from './components/auth/Signup'
import SplashPage from './components/home/SplashPage';
import Dashboard from './components/main/Dashboard';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </Router>
    
    </>
    
  );
}

export default App;
