// src/components/MainContent.jsx
import React from 'react';

export default function MainContent() {
  const mainStyle = {
    padding: '18px',
    margin: '12px auto',
    maxWidth: '900px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
  };

  const heading = {
    marginTop: 0,
    color: '#222'
  };

  const paragraph = {
    lineHeight: '1.6',
    color: '#444'
  };

  return (
    <main style={mainStyle}>
      <h2 style={heading}>Welcome!</h2>
      <p style={paragraph}>
        This is the main content. Try adding or editing the user profile component and see the inline
        styles applied instantly.
      </p>
    </main>
  );
}
