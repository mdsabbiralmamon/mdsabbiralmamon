import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-7 px-5 border-t border-[#3a3a3a] flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <Link
          href="https://github.com/mdsabbiralmamon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </Link>
        <Link
          href="https://www.facebook.com/mdsabb1ralmamon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/facebook.svg"
              alt="facebook"
              className="w-1/2 h-1/2"
            />
          </div>
        </Link>
        <Link
          href="https://linkedin.com/in/mdsabbiralmamon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/linkedIn.svg"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </div>
        </Link>
      </div>

      <p className="text-white-500">
        © 2024 Md.Sabbir Al Mamon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
