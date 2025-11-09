// src/components/UserProfile.jsx
import React from 'react';

export default function UserProfile(props) {
  const container = {
    border: '1px solid #ccc',
    padding: '12px',
    margin: '12px',
    borderRadius: '8px',
    maxWidth: '420px',
    backgroundColor: '#fafafa',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
  };

  const nameStyle = {
    color: '#0b5fff',
    fontSize: '1.3rem',
    margin: '0 0 6px 0'
  };

  const ageStyle = {
    fontWeight: '700',
    display: 'inline-block',
    marginLeft: '4px'
  };

  const bioStyle = {
    marginTop: '8px',
    lineHeight: '1.4',
    color: '#333'
  };

  // Props fallback if parent doesn't pass props
  const { name = 'No Name', age = '—', bio = 'No bio provided.' } = props;

  return (
    <div style={container}>
      <h2 style={nameStyle}>{name}</h2>
      <p>Age: <span style={ageStyle}>{age}</span></p>
      <p style={bioStyle}>Bio: {bio}</p>
    </div>
  );
}
