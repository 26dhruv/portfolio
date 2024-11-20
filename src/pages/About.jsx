import SideBar from "../components/common/SideBar";
import AboutHeader from "../components/about/AboutHeader";
import AboutContent from "../components/about/AboutContent";
import DecorativeCircles from "../components/about/DecorativeCircles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const navigate=useNavigate()
  const userProfile=useSelector((state)=>state.userProfile)
  useEffect(()=>{
    if(!userProfile.isAuthenticated)
      {
        navigate('/log-in')
      }
    document.title="About";
  },[])
  return (
    <div className="flex h-screen ">
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
