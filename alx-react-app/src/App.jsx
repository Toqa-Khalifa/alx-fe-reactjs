
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';



function App() {

  return (
    <>
      <div>
            <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
       <h1>Profiles</h1>

      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />

      <UserProfile
        name="Mohamed"
        age={30}
        bio="Frontend dev, coffee lover"
      />

      </div>
     
    </>
  )
}

export default App
