import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-custom-dark h-screen">
      <div className="h-full overflow-y-auto bg-primary bg-opacity-10 flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
