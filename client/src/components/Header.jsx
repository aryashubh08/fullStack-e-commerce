import React from "react";
import { CiSearch } from "react-icons/ci";
import CountryDropdown from "./CountryDropdown";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-full bg-[#8C52FF] ">
        <div className="w-full bg-[#8C52FF] py-2 m-0">
          <p className="m-0 text-center text-xs text-white font-semibold">
            Due to the <span className="font-semibold">COVID 19</span> epidemic,
            orders may be processed with a slight delay
          </p>
        </div>
      </div>

      <div className="w-full ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-6 py-2">
              <img src="logo.png" alt="logo" className="h-17" />
              {/* Dropdown Button here */}
              <CountryDropdown />
              {/* Search Bar here */}
              <div className="w-[50%] bg-[#f3f4f7] h-[48px] relative flex items-center rounded-md">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-transparent outline-none text-lg px-4 w-full h-full border-none pr-12"
                />

                <button className="absolute right-0 top-0 h-full w-[48px] flex items-center justify-center hover:bg-gray-200 rounded-r-md">
                  <CiSearch className="text-2xl text-gray-600" />
                </button>
              </div>
              {/* User and Cart Button */}
              <div className="flex items-center gap-6 py-2">
                <div className="border p-2 rounded-full cursor-pointer hover:shadow-md duration-200">
                  <FaRegUser className="text-xl" />
                </div>
                <div>
                  <span>₹249</span>
                </div>
                <div className="bg-red-50 p-2 rounded-full relative cursor-pointer hover:shadow-md duration-200">
                  <BsHandbag className="text-xl text-red-600" />
                  <span className="w-4 flex text-xs -top-1 -right-1 items-center justify-center bg-red-600 text-white h-4 rounded-full absolute">
                    0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
