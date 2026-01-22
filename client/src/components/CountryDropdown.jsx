import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const CountryDropdown = () => {
  return (
    <div className="flex items-center hover:shadow-md duration-200 justify-between gap-6 border cursor-pointer border-slate-100 px-3 py-2 rounded-md">
      <div>
        <p className="text-xs text-slate-300  m-0">Your Location</p>
        <p className="text-md font-semibold text-[#8C52FF] leading-none m-0">
          Alaska
        </p>
      </div>

      <div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
};

export default CountryDropdown;
