import UserDetails from './UserDetails';

// Remove the { userData } prop from the function signature
function UserInfo() {
  // Remove userData={userData} from the JSX
  return <UserDetails />;
}

export default UserInfo;