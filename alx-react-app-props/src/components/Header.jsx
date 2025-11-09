// src/components/Header.jsx
import React from 'react';

export default function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center',
    padding: '20px 10px',
    borderRadius: '6px',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.8rem',
    letterSpacing: '0.5px',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>My Favorite Cities</h1>
    </header>
  );
}

