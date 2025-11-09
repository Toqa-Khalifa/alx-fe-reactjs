import React, { useContext } from 'react'; // Import useContext
import UserContext from './UserContext'; // Import the context object

// 7. Component no longer accepts { userData } as a prop
function UserDetails() {
  // 8. Consume the context to get the data directly
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '15px', border: '1px solid #eee', borderRadius: '4px', backgroundColor: '#e9f7ef' }}>
      <h4>User Details (Level 3 - Context Consumer)</h4>
      <p style={{ fontWeight: 'bold' }}>Data Retrieved via Context API:</p>
      {/* 9. Use the data from the context object */}
      <p>Name: <span style={{ color: '#28a745', fontWeight: 'bold' }}>{userData.name}</span></p>
      <p>Email: <span style={{ color: '#28a745' }}>{userData.email}</span></p>
    </div>
  );
}

export default UserDetails;