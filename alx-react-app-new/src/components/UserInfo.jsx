import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div style={{ padding: '20px', margin: '15px 0', border: '1px solid #ddd', borderRadius: '6px', backgroundColor: '#f0f8ff' }}>
      <h3>User Info (Level 2)</h3>
      <UserDetails />
    </div>
  );
}

export default UserInfo;