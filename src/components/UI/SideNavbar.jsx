import React from "react";
import { FaCube, FaBookOpen, FaBookmark, FaTools } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const SideNavbar = () => {
  return (
    <div className="col-12 col-md-3 bg-dark p-4 border-md-end border-secondary d-flex flex-column">
      <img
        className="bg-dark object-fit-cover mb-4 w-50 w-md-100"
        src="logo-text.png"
        alt="logo"
      />
      <button className="btn text-white mb-4 w-100 text-start" id="dash-btn">
        <FaCube size={20} className="me-2" />
        Dashboard
      </button>

      <div className="mb-4 btn text-white mb-4 w-100 text-start" id="collection-btn">
        <FaBookOpen size={20} className="me-2" />
        My Collections
      </div>

      <div className="mb-4 btn text-white mb-4 w-100 text-start">
        <FaBookmark size={20} className="me-2" />
        Favourites
      </div>

      <div className="mt-auto d-none d-md-block">
        <div className="mb-3 d-flex align-items-center">
          <FaTools size={20} className="me-2" />
          <span>Settings</span>
        </div>
        <div className="d-flex align-items-center">
          <FaArrowRightFromBracket size={20} className="me-2" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
