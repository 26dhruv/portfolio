import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Avatar({ src, alt }) {
  return (
    <div className="flex justify-center ">
       <div className={`relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary group`}>
        <img 
          src={src} 
          alt={alt}
          className='w-full h-full object-cover group-hover:opacity-50'
        />
        {/*Edit Icon*/ }
        <Link to='/edit'>
         <div className="absolute  inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FaEdit className="text-xl text-white hover:bg-transparent" />
        </div>
        </Link>
      </div>
    </div>
  );
}