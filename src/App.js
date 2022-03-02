import React from 'react';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import SplashPage from './components/home/SplashPage';
import Dashboard from './components/main/Dashboard';
import AuthProvider from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
      <div className="App">
      <Header />
      <SplashPage />
      {/* <Dashboard /> */}
      <Footer />
      <Signup />
      <Login />
    </div>
    </AuthProvider>
    
  );
}

export default App;
