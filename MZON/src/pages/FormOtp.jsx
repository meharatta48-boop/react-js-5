import React from "react";
import Otp from "../components/Otp";

const FormOtp = () => {
  return (
    <div>
      <div className="flex justify-center pb-36">
        <div className="w-[70%]">
          <h1 className="text-2xl font-bold my-6 text-center">
            Verify Your Identity
          </h1>
          <form>
            {/* FILE UPLOAD AREA */}
            <div className="bg-[#eaeaea] rounded p-20 text-center mb-6 relative">
              <p className="text-gray-600 mb-3 text-2xl">
                Drop your file's here!
              </p>

              <input type="file" className="hidden" />

              <button
                type="button"
                className="px-5 py-2 bg-teal-600 text-white rounded absolute -bottom-2 left-1/2 -translate-x-1/2"
              >
                + Add files
              </button>
            </div>

            {/* Seller Type */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="flex gap-6 border-b-2 pb-2 border-gray-300">
                <p className="hover:font-bold hover:border-b-2 hover:border-green-600">
                  Personal seller verification
                </p>

                <p className="hover:font-bold hover:border-b-2 hover:border-green-600">
                  Company seller verification
                </p>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone verification
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full border border-gray-300 bg-gray-100 rounded p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Mail verification
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full border border-gray-300 bg-gray-100 rounded p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ID verification
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full border border-gray-300 bg-gray-100 rounded p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  BVN verification
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full border border-gray-300 bg-gray-100 rounded p-2"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-[50%] py-2 bg-teal-600 text-white rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
     
      <Otp />
    </div>
  );
};

export default FormOtp;
