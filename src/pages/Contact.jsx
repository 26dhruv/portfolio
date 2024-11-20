import { useEffect } from 'react';
import SideBar from '../components/common/SideBar';
import ContactForm from '../components/contact/ContactForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ContactPage = () => {
  const navigate=useNavigate()
  const userProfile=useSelector((state)=>state.userProfile)
  useEffect(()=>{
    if(!userProfile.isAuthenticated)
    {
        navigate('/log-in')
      }
    document.title="Contact";
  },[])
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="flex-1 p-6 ml-72">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h1>
        <p className="text-xl text-gray-600 text-center mb-6">
          Have any questions or want to get in touch? I’d love to hear from you!
        </p>

        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
