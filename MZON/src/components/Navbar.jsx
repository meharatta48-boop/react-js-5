import React from "react";

import { IoIosSave } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import profileImg from "../assets/profile.jpg";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 py-4 px-2 md:px-[10%] flex items-center justify-between">
      <a to="#" className="text-white text-xl font-bold">
        MZONE
      </a>

      <div className="flex items-center gap-2 md:gap-6">
        <ul className="flex items-center gap-2 md:gap-4">
          <li className="text-white bg-[#f4f0f043] hover:text-black hover:bg-amber-500 p-2 rounded-full">
            <a to="#">
              <IoIosSave size={20} />
            </a>
          </li>

          <li className="text-white bg-[#f4f0f043] hover:text-black hover:bg-amber-500 p-2 rounded-full">
            <a to="#">
              <IoMdNotificationsOutline size={20} />
            </a>
          </li>

          <li className="text-white bg-[#f4f0f043] hover:text-black hover:bg-amber-500 p-2 rounded-full">
            <a to="#">
              <MdOutlineMessage size={20} />
            </a>
          </li>

          <li className="text-white bg-[#f4f0f043] hover:text-black hover:bg-amber-500 p-2 rounded-full">
            <a to="#">
              <LuLayoutList size={20} />
            </a>
          </li>

          <li className="bg-amber-600  rounded-full p-1 flex items-center justify-center">
            <a to="#">
              <img
                src={profileImg}
                alt="Profile image"
                className="w-8 h-8 rounded-full"
              />
            </a>
          </li>
        </ul>

        <button className="bg-white font-semibold px-4 py-2 md:px-5 md:py-2 rounded shadow">
          Start Selling
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
