import React from 'react';
import Signup from './components/auth/Signup';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import SplashPage from './components/home/SplashPage';
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
      </div>
    </AuthProvider>
    
  );
}

export default App;
