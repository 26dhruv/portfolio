import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { HiServer } from "react-icons/hi";
import { IoBagRemoveSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SideBar() {
  const sideBarContent = [
    { logo: FaHome, name: "Home", path: "/home" },
    { logo: IoPerson, name: "About", path: "/about" },
    { logo: HiServer, name: "Services", path: "/services" }, // Add path for future routes
    { logo: IoBagRemoveSharp, name: "Portfolio", path: "/portfolio" }, // Add path for future routes
    { logo: IoMdContact, name: "Contact", path: "/contact" }, // Add path for future routes
  ];

  return (
    <div
      className="fixed top-0 left-0 h-screen w-72 bg-white shadow-md flex flex-col gap-4 p-4"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">Menu</h2>
      <ul className="flex flex-col gap-4">
        {sideBarContent.map((content, index) => (
          <li key={index} className="w-full">
            <Link to={content.path}> {/* Use absolute paths */}
              <button
                className="flex items-center gap-4 p-4 w-full text-left text-gray-700 
                           hover:bg-purple-100 hover:text-purple-700 font-semibold 
                           rounded-md transition-all"
              >
                <content.logo className="text-2xl" />
                {content.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
