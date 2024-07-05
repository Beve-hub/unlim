import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

const Navbar = () => {
    const [icon, setIcon] = useState(false);

    const handleClick = () => {
        setIcon(true);
    };

    return (
        <nav className="bg-[#e5e5e5] top-0 w-screen fixed">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
      
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
           <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center gap-6 justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 gap-4 items-center">
          <img className="h-8 w-auto" src="/src/assets/logo.png" alt="Your Company"/>
        </div>
        <div className=" items-center border rounded-lg bg-[#f0f0f0] border-gray-300 py-1 pl-2 md:flex hidden">
            <CiSearch size={26} className="text-gray-500 mr-2" />
            <input
                type="text"
                placeholder="Search for patients"
                className="appearance-none bg-transparent border-none w-full text-gray-700   px-2 leading-tight focus:outline-none"
            />
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
        <button type="button" className="relative rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:flex hidden">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

           <div className="relative ml-3">
          <div>
            <button onClick={handleClick} type="button" className="relative rounded-full items-center bg-[#f0f0f0] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:flex hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="/src/assets/profile_img.png" alt="" />
              <span> Deko</span>
                {icon ? <RiArrowDownSLine size={22} /> : <RiArrowRightSLine size={22} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar
