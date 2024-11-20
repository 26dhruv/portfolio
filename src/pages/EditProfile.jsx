import { useEffect } from "react";
import SideBar from "../components/common/SideBar";
import EditForm from "../components/edit/EditForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EditPage() {
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
    
        <EditForm />
    </div>
  </div>
  );
}

export default EditPage;