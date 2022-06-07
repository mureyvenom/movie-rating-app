import LostSVG from '../assets/images/lost.svg';
import Button from './Button';

interface ErrorProps {
  onClick: () => void;
  buttonText: string;
  error: string;
}

const ErrorPage = ({ onClick, buttonText, error }: ErrorProps) => {
  return (
    <div className="fixed px-5 text-center w-full h-[100vh] flex flex-col justify-center items-center top-0 left-0 text-secondary">
      <img src={LostSVG} alt="Lost" className="max-h-52" />
      <p className="my-5">{error}</p>
      <Button onClick={() => onClick()} variant="primary">
        {buttonText}
      </Button>
    </div>
  );
};

export default ErrorPage;
