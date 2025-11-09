// MainContent.jsx
import React from 'react';

const MainContent = ({ children }) => {
  return (
    <main style={{
      padding: '24px',
      maxWidth: '1000px',
      margin: '20px auto',
      backgroundColor: '#fff',
      minHeight: '200px'
    }}>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {children}
      </div>
    </main>
  );
};

export default MainContent;
