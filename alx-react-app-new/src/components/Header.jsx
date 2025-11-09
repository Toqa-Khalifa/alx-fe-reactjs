// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '20px 10px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem', letterSpacing: '0.5px' }}>
        My Favorite Cities
      </h1>
    </header>
  );
};

export default Header;
