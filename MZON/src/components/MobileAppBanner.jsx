import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import mobileApp from "../assets/mobile-app.jpeg";

const MobileAppBanner = () => {
  return (
    <div className="flex flex-wrap items-center bg-[#fcfcfc] pt-10 px-20 rounded-lg">
      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 space-y-6 pl-20">
        <h1 className="text-[40px] font-bold">
          Try Our Mobile App For <br /> Better User Experience
        </h1>

        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Totam
          fuga dolores dolorum labore quod vero recusandae.
        </p>

        {/* APP BUTTONS */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <FaApple /> App Store
          </button>

          <button className="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-2">
            <FaGooglePlay /> Google Play
          </button>
        </div>

        {/* FEATURES LIST */}
        <div className="space-y-2">
          <p className="flex items-center gap-3 text-gray-700">
            <SiTicktick className="text-green-600" />
            <span>Access the full kit from mobile app</span>
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <SiTicktick className="text-green-600" />
            <span>Unlimited bandwidth</span>
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={mobileApp}
          alt="Mobile App"
          className="w-[80%] max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default MobileAppBanner;
