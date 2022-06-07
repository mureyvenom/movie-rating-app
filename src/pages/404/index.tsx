import { useNavigate } from 'react-router-dom';
import LostSVG from '../../assets/images/lost.svg';
import Button from '../../components/Button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed w-full px-5 h-[100vh] flex flex-col justify-center items-center top-0 left-0 text-secondary">
      <img src={LostSVG} alt="Lost" className="max-h-52" />
      <p className="my-5 text-center">
        You seem to be lost... You can find your way back by going back home
      </p>
      <Button onClick={() => navigate('/')} variant="primary">
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
