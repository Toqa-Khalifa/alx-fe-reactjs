// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  const footerStyle = {
    textAlign: 'center',
    padding: '12px',
    marginTop: '18px',
    color: '#666',
    borderTop: '1px solid #eee'
  };

  const small = {
    fontSize: '0.9rem'
  };

  return (
    <footer style={footerStyle}>
      <small style={small}>© {new Date().getFullYear()} My React App</small>
    </footer>
  );
}
