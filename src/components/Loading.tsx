import LoadingSVG from '../assets/images/loading.svg';
import { BiLoaderAlt } from 'react-icons/bi';

const Loading = () => {
  return (
    <div className="fixed w-full h-[100vh] flex flex-col justify-center items-center top-0 left-0 text-secondary">
      <img src={LoadingSVG} alt="Loading" className="max-h-52" />
      <p className="my-5">Loading...</p>
      <BiLoaderAlt className="text-primary animate-spin" size={36} />
    </div>
  );
};

export default Loading;
