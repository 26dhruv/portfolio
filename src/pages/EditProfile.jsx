import { useEffect } from "react";
import SideBar from "../components/common/SideBar";
import EditForm from "../components/edit/EditForm";

function EditPage() {
  
  useEffect(()=>{
    
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