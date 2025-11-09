import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from "./components/Counter"; 


function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f2f6fb', minHeight: '100vh', paddingBottom: '20px' }}>
      <Header />
      <MainContent />
      <Counter />
      <UserProfile name="Sara Ahmed" age={26} bio="Front-end enthusiast who loves React." />
      <Footer />
    </div>
  );
}

export default App;