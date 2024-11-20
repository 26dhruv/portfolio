import { useEffect } from "react";
import SideBar from "../components/common/SideBar";
import { PortfolioGrid } from "../components/porfolio/PortfolioGrid";

function PortfolioPage() {
  
  useEffect(()=>{
    
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