import Profile from '../../components/Profile';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function EditProfile() {
  return (
    <>
      <div className="min-h-screen bg-dark-blue flex flex-col items-center p-4 gap-10">
        <Link to="/home" className="absolute top-0 left-0">
          <Button ctaTitle="Back to Home >>>" paddingY="2" />
        </Link>
        <Profile />
      </div>
    </>
  );
}
export default EditProfile;
