import SignUp from '../../components/SignUp';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function SignUpPage() {
  return (
    <div className="min-h-screen bg-dark-blue flex justify-center items-center p-4">
      <Link to="/home" className="absolute top-4 left-8">
        <Button ctaTitle="Back to Home >>>" paddingY="2" />
      </Link>
      <SignUp />
    </div>
  );
}
export default SignUpPage;
