import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import FormRegisteration from '../../components/FormRegisteration';

function Registeration() {
  return (
    <div className="min-h-screen bg-dark-blue flex justify-center items-center p-4 relative">
      <Link to="/home" className="absolute top-0 left-0">
        <Button ctaTitle="Back to Home >>>" paddingY="2" />
      </Link>
      <FormRegisteration />
    </div>
  );
}
export default Registeration;
