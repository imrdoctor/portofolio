import { useState } from 'react';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <section className="w-full px-3 antialiased  lg:px-6">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center w-full h-14 select-none">
            <div className="relative  flex flex items-start justify-between w-full mx-auto font-medium  items-center  ">

              <div className={`absolute bg-gradient-to-br  backdrop-blur-lg from-gray-600 via-black via-black via-black to-gray-600 to-gray-600 ----  z-50 flex-row flex items-center justify-center w-auto h-auto px-2 text-center text-gray-400 -translate-x-1/2  border-gray-700 rounded-full  border md:w-auto  left-1/2 `}>
                
                <a href="#" className="relative inline-block w-auto h-full px-4  mx-2 font-medium leading-tight text-center text-white py-2 group  md:px-2 lg:mx-3 md:text-center">
                  <span>Home</span>
                  <span className="absolute bottom-0 left-0 w-full h-px duration-300 ease-out translate-y-px bg-gradient-to-r md:from-gray-700 md:via-gray-400 md:to-gray-700 from-gray-900 via-gray-600 to-gray-900"></span>
                </a>
                <a href="#" className="relative inline-block w-full h-full px-4  mx-2 font-medium leading-tight text-center duration-300 ease-out py-2 group hover:text-white md:w-auto md:px-2 lg:mx-3 md:text-center">
                  <span>Features</span>
                  <span className="absolute bottom-0 w-0 h-px duration-300 ease-out translate-y-px group-hover:left-0 left-1/2 group-hover:w-full bg-gradient-to-r md:from-gray-700 md:via-gray-400 md:to-gray-700 from-gray-900 via-gray-600 to-gray-900"></span>
                </a>

                <a href="#" className="relative inline-block w-full h-full px-4  mx-2 font-medium leading-tight text-center duration-300 ease-out py-2 group hover:text-white md:w-auto md:px-2 lg:mx-3 md:text-center">
                  <span>Contact</span>
                  <span className="absolute bottom-0 w-0 h-px duration-300 ease-out translate-y-px group-hover:left-0 left-1/2 group-hover:w-full bg-gradient-to-r md:from-gray-700 md:via-gray-400 md:to-gray-700 from-gray-900 via-gray-600 to-gray-900"></span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
