import React from 'react';

function MainContent({ children }) {
  return (
    <main
      style={{
        padding: '24px',
        maxWidth: '1000px',
        margin: '20px auto',
        backgroundColor: '#ffffff',
        minHeight: '200px'
      }}
    >
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {children}
      </div>
    </main>
  );
}

export default MainContent;
