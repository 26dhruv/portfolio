import SideBar from "../components/common/SideBar";
import { Avatar } from "../components/home/Avatar";
import { Description } from "../components/home/Description";
import { Profile } from "../components/home/Profile";
import SocialButtons from "../components/home/SocialButtons";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-1 p-6 ml-72">
        <div className="flex flex-col items-center gap-4">
          <Avatar src={"src/assets/person.jpg"} alt={"Profile Image"} />
          <Profile firstName={"Dhruv"} lastName={"Thakkar"} />
          <Description text={"I'm a web developer"} />
          <SocialButtons />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
