// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f2f4f7',
      color: '#333',
      textAlign: 'center',
      padding: '12px 10px',
      marginTop: '24px',
      borderTop: '1px solid #e0e0e0'
    }}>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} My Favorite Cities. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
