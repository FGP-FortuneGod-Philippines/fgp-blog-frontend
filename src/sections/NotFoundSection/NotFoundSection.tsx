import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import illustration from '@/assets/404illustration.svg';

const NotFoundSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center my-15 px-4 text-center space-x-30">
      <div className='flex flex-col justify-center items-center'>
        <img
          src={illustration}
          alt="Page Not Found Illustration"
          className="w-full max-w-sm mx-auto"
        />
        <h3 className="text-6xl sm:text-7xl font-extrabold mb-4">
          404
        </h3>
        <p className="text-lg sm:text-2xl mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Button
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}

export default NotFoundSection;
