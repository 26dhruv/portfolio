import { useEffect } from "react";
import SideBar from "../components/common/SideBar";
import { Avatar } from "../components/home/Avatar";
import { Description } from "../components/home/Description";
import { Profile } from "../components/home/Profile";
import SocialButtons from "../components/home/SocialButtons";
import { useSelector } from "react-redux";
const HomePage = () => {
  const userProfile = useSelector((state)=>state.userProfile)
  useEffect(()=>{
  
    document.title="Home";
  },[])
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />

      <div className="flex-1 p-6 ml-72 ">
        <div className="flex flex-col items-center gap-4">
          <Avatar src={userProfile.profilePicture} alt={"Profile Image"} />
          <Profile firstName={userProfile.firstName} lastName={userProfile.lastName} />
          <Description text={userProfile.description} />
          <SocialButtons LinkedIn={userProfile.links['linkedin']} Instagram={userProfile.links['instagram']} GitHub={userProfile.links['github']} Twitter={userProfile.links['twitter']}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
