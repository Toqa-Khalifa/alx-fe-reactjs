import React from 'react';

function MainContent() {
  const mainStyle = {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const paragraphStyle = {
    color: '#333',
    fontSize: '18px',
    lineHeight: '1.6',
  };

  return (
    <main style={mainStyle}>
      <h2 style={{ color: 'navy', marginBottom: '10px' }}>Top Cities to Visit</h2>
      <p style={paragraphStyle}>
        Traveling opens up new perspectives and experiences. Here are some of my favorite cities:
      </p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '5px 0', color: '#555' }}>Cairo</li>
        <li style={{ margin: '5px 0', color: '#555' }}>Paris</li>
        <li style={{ margin: '5px 0', color: '#555' }}>Tokyo</li>
      </ul>
    </main>
  );
}

export default MainContent;
