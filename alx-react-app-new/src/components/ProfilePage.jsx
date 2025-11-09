import UserInfo from './UserInfo';

// Remove the { userData } prop from the function signature
function ProfilePage() {
  // Remove userData={userData} from the JSX
  return <UserInfo />;
}

export default ProfilePage;