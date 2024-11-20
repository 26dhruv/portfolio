import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editDescription, editFirstName, editLastName, editLink, editProfileImage } from "../../store/slices/slicer";
import { FaUser, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaCamera } from "react-icons/fa";
import { MdDescription, MdLink } from "react-icons/md";
import InputField from "../common/inputField";
import { useNavigate } from "react-router-dom";

const EditForm = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.userProfile);
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    description: profile.description,
    profilePicture: profile.profilePicture,
    github: profile.links.github,
    linkedin: profile.links.linkedin,
    instagram: profile.links.instagram,
    twitter: profile.links.twitter,
  });

  const [imagePreview, setImagePreview] = useState(profile.profilePicture);

  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prev => ({
          ...prev,
          profilePicture: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    dispatch(editFirstName(formData.firstName));
    dispatch(editLastName(formData.lastName));
    dispatch(editDescription(formData.description));
    dispatch(editProfileImage(formData.profilePicture));
    dispatch(editLink({ platform: 'github', url: formData.github }));
    dispatch(editLink({ platform: 'linkedin', url: formData.linkedin }));
    dispatch(editLink({ platform: 'instagram', url: formData.instagram }));
    dispatch(editLink({ platform: 'twitter', url: formData.twitter }));
    navigate('/home')

  };

  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center space-x-3 mb-6">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8">
          <h2 className="text-3xl font-bold text-white">Edit Profile</h2>
          <p className="mt-2 text-blue-100">    
            /n
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Profile Picture Upload */}
          <div className="flex justify-center -mt-20 mb-8">
            <div className="relative group">
              <img
                src={imagePreview}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <FaCamera className="w-8 h-8 text-white" />
              </div>
              <InputField
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Personal Information */}
          <section className="space-y-6">
            <SectionHeader icon={FaUser} title="Personal Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: FaUser, name: "firstName", label: "First Name" },
                { icon: FaUser, name: "lastName", label: "Last Name" }
              ].map((field) => (
                <div key={field.name} className="relative">
                  <div className="flex items-center space-x-2 mb-2">
                    <field.icon className="w-5 h-5 text-blue-600 md:hidden" />
                    <label className="block text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                  </div>
                  <div className="relative">
                    <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 hidden md:block" />
                    <InputField
                      type="text"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-3 md:pl-10 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                      placeholder={`Enter your ${field.label}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bio */}
          <section className="space-y-6">
            <SectionHeader icon={MdDescription} title="Bio" />
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">About You</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 min-h-[120px]"
                rows="4"
                placeholder="Tell us about yourself..."
              />
            </div>
          </section>

          {/* Social Links */}
          <section className="space-y-6">
            <SectionHeader icon={MdLink} title="Social Links" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: FaGithub, name: "github", label: "GitHub" },
                { icon: FaLinkedin, name: "linkedin", label: "LinkedIn" },
                { icon: FaInstagram, name: "instagram", label: "Instagram" },
                { icon: FaTwitter, name: "twitter", label: "Twitter" }
              ].map((social) => (
                <div key={social.name} className="relative">
                  <div className="flex items-center space-x-2 mb-2">
                    <social.icon className="w-5 h-5 text-blue-600 md:hidden" />
                    <label className="block text-sm font-medium text-gray-700">
                      {social.label}
                    </label>
                  </div>
                  <div className="relative">
                    <social.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 hidden md:block" />
                    <InputField
                      type="url"
                      name={social.name}
                      value={formData[social.name]}
                      onChange={handleChange}
                      className="w-full p-3 md:pl-10 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                      placeholder={`Enter your ${social.label} URL`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-6">
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;