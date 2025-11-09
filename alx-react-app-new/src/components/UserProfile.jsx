// UserProfile.jsx
import React from 'react';

const UserProfile = (props) => {
  const { name, age, bio } = props;
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '14px',
      margin: '12px',
      maxWidth: '320px',
      backgroundColor: '#fafafa'
    }}>
      <h2 style={{ color: '#2a6f97', margin: '0 0 8px 0', fontSize: '1.4rem' }}>
        {name}
      </h2>

      <p style={{ margin: '6px 0', fontSize: '0.95rem', color: '#333' }}>
        Age: <span style={{ fontWeight: '700' }}>{age}</span>
      </p>

      <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem', color: '#555', lineHeight: '1.4' }}>
        Bio: {bio}
      </p>
    </div>
  );
};

export default UserProfile;
