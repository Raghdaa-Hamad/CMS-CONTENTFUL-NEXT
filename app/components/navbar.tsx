import { IoIosArrowRoundForward } from 'react-icons/io';
import { FiPhone } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { IoLocationOutline } from 'react-icons/io5';

export default function Navbar() {
  return (
    <>
      <div className="bg-rose-500 h-10 text-white text-sm flex items-center justify-center">
        Today deal sale off <span className="font-bold mx-1"> 70%</span>. End in. Hurry up <span><IoIosArrowRoundForward /></span>
      </div>
      <div className="bg-gray-100 h-12 flex items-center justify-between px-4">
        <div className="flex items-center mr-8">
          <FiPhone className="text-gray-500 mr-2" />
          <span className="text-gray-500 text-sm hover:text-blue-300">0284895467</span>
        </div>
        <div className="flex items-center mr-8">
          <TfiEmail className="text-gray-500 mr-1" />
          <span className="text-gray-500 text-sm hover:text-blue-300">kalles@domain.com</span>
        </div>
        <div className="text-center flex-1">
          <span className="text-gray-500 mb-0 text-sm">summer sale discount at <span className="text-rose-500">50%</span>!</span>
          <span className="text-black text-sm hover:text-blue-300">shop now</span>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-1">
            <IoLocationOutline className="text-gray-500 mr-1" />
            <span className="text-gray-500 text-xs hover:text-blue-300 mr-1">Location</span>
          </div>
          <div className="relative mr-1">
            <select className="bg-gray-100 text-gray-500 py-1 px-1 rounded leading-tight text-xs hover:text-blue-300">
              <option>English</option>
              <option>Arabic</option>
            </select>
          </div>
          <div className="relative">
            <select className="bg-gray-100 text-gray-500 py-1 px-1 rounded leading-tight text-xs hover:text-blue-300">
              <option>USD</option>
              <option>EGB</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
