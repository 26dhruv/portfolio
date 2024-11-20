// src/pages/ServicePage.js
import { useEffect } from "react";
import SideBar from "../components/common/SideBar";
import ServiceList from "../components/service/ServiceList";


const ServicePage = () => {
  
  useEffect(()=>{
    
    document.title="Service";
  },[])
  return (
    
    <div className="flex h-screen">
    <SideBar />

    <div className="flex-1 p-6 ml-72">
      <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-center mb-6">My Services</h1>
        <p className="text-xl text-gray-600 text-center mb-10">
          I offer a range of services designed to help businesses and developers achieve their goals.
        </p>
        <ServiceList />
      </div>
    </div>
  </div>
  );
};

export default ServicePage;
