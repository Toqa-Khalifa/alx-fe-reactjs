import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from "./components/Counter";
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';


function App() {
  const userData = { 
    name: "Sara Ahmed", 
    age: 26, 
    bio: "Front-end enthusiast who loves React." 
  };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f2f6fb', minHeight: '100vh', paddingBottom: '20px' }}>
        <Header />
        <MainContent />
        <Counter />
        <UserProfile />
        <ProfilePage />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
