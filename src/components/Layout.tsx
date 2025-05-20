
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatButton from './ChatButton';
import BackgroundShapes from './BackgroundShapes';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <BackgroundShapes />
      <Navbar />
      <main className="flex-grow pt-16 relative z-10">{children}</main>
      <Footer />
      <ChatButton />
    </div>
  );
};

export default Layout;
