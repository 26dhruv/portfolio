import SideBar from "../components/common/SideBar";
import AboutHeader from "../components/about/AboutHeader";
import AboutContent from "../components/about/AboutContent";
import DecorativeCircles from "../components/about/DecorativeCircles";

const AboutPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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
