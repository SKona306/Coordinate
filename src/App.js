import React from 'react';
import Header from './components/home/Header';
import SplashPage from './components/home/SplashPage';
import Dashboard from './components/main/Dashboard';


function App() {
  return (
    <div className="App">
      <Header />
      <SplashPage />
      <Dashboard />
    </div>
  );
}

export default App;
