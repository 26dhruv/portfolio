import  { Avatar } from "../components/home/Avatar"
import { Description } from "../components/home/Description"
import { Profile } from "../components/home/Profile"
const HomePage = () => {
  return (
    <div>
        <Avatar src={'src/assets/person.jpg'} alt={'Profile Image'}/>
        <Profile firstName={'Dhruv'} lastName={'Thakkar'}/>
        <Description/>

    </div>
  )
}

export default HomePage
