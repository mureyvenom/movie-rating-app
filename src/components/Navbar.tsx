import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { BiMoviePlay } from 'react-icons/bi';

interface NavItemProps {
  link?: string;
  children: ReactNode;
}

const NavItem = ({ link, children }: NavItemProps) => {
  return (
    <Link className="cursor-pointer text-sm text-white" to={link || '/'}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  const [mobileToggle, setMobielToggle] = useState(false);

  return (
    <div className="flex md:flex-row flex-col md:items-center md:justify-between bg-secondary shadow-md md:h-20 px-10 py-5">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <Link className="flex items-center" to="/">
            Rate List <BiMoviePlay className="ml-2" />
          </Link>
        </div>
        <button onClick={() => setMobielToggle(!mobileToggle)} className="md:hidden">
          <FiMenu className="text-black" size={20} />
        </button>
      </div>
      <nav
        className={`flex md:flex-row flex-col md:items-center gap-4 md:mt-0 md:scale-100 md:opacity-100 transform transition-all duration-300 origin-top ${
          mobileToggle ? 'scale-100 h-auto opacity-100 mt-5' : 'scale-0 h-0 opacity-0'
        }`}
      >
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
      </nav>
    </div>
  );
};

export default Navbar;
