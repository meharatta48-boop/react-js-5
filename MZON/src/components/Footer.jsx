import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#051B1A] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">About us</h3>
          <ul className="space-y-3 text-sm">
            <li>About Mzone</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Billing Policy</li>
            <li>Latest Ads</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-sm">
            <li>support@mzone.ug</li>
            <li>Safety tips</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Our Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our resources</h3>
          <ul className="space-y-3 text-sm">
            <li>Mzone on FB</li>
            <li>Our Instagram</li>
            <li>Our YouTube</li>
            <li>Our Twitter</li>
          </ul>
        </div>

        {/* Hot Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Hot links</h3>
          <ul className="space-y-3 text-sm">
            <li>Mzone Products</li>
            <li>Mzone Affiliate Program</li>
            <li>Mzone Training</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 py-6 text-center text-black font-semibold bg-white">
        Copyrights 2023. All rights reserved
      </div>
    </footer>
  );
}
