import SideBar from '../components/common/SideBar';
import AboutHeader from '../components/about/AboutHeader';
import AboutContent from '../components/about/AboutContent';
import DecorativeCircles from '../components/about/DecorativeCircles';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About';
  }, []);
  return (
    <div className="flex h-screen ">
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-72">
        <div className="relative flex flex-col items-center gap-8">
          {/* Decorative Background Elements */}
          <DecorativeCircles />

          {/* About Header */}
          <AboutHeader />

          {/* About Content */}
          <AboutContent />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
