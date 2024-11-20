import { useEffect } from "react";
import SideBar from "../components/common/SideBar";
import { PortfolioGrid } from "../components/porfolio/PortfolioGrid";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PortfolioPage() {
  const navigate=useNavigate()
  const userProfile=useSelector((state)=>state.userProfile)
  useEffect(()=>{
    if(!userProfile.isAuthenticated)
      {
        navigate('/log-in')
      }
    document.title="Portfolio";
  },[])
  return (
    
    <div className="flex h-screen">
    <SideBar />

    <div className="flex-1 p-6 ml-72">
    <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Portfolio
        </h1>
        <PortfolioGrid />
    </div>
  </div>
  );
}

export default PortfolioPage;