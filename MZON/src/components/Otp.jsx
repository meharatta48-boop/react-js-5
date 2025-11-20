import React from "react";

const Otp = () => {
  return (
    <div className="fixed inset-0 bg-[#dadada7e] flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-[380px] text-center shadow-lg relative">
        <h2 className="text-2xl font-semibold mb-2">Enter Verification Code</h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter 4 Digit verification code sent to your mobile number <br />
          *****5389
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <input
            type="text"
            maxLength={1}
            value={8}
            className="w-10 h-12 text-center border-b-2 border-gray-400 text-xl outline-none focus:border-teal-600"
          />

          <input
            type="text"
            maxLength={1}
            value={3}
            className="w-10 h-12 text-center border-b-2 border-gray-400 text-xl outline-none focus:border-teal-600"
          />

          <input
            type="text"
            maxLength={1}
            className="w-10 h-12 text-center border-b-2 border-gray-400 text-xl outline-none focus:border-teal-600"
          />

          <input
            type="text"
            maxLength={1}
            className="w-10 h-12 text-center border-b-2 border-gray-400 text-xl outline-none focus:border-teal-600"
          />
        </div>

        <button className="w-full bg-teal-600 text-white py-2 rounded-lg text-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Otp;
