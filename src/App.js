import React from 'react';
import Signup from './components/auth/Signup';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import SplashPage from './components/home/SplashPage';
import Dashboard from './components/main/Dashboard';


function App() {
  return (
    <div className="App">
      <Header />
      <SplashPage />
      {/* <Dashboard /> */}
      <Footer />
      <Signup />
    </div>
  );
}

export default App;
