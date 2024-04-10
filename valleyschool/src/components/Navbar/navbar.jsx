import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [openmenu, setOpenmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      // const navbar1=document.getElementById("navbar-cta");
      const prop = document.getElementById("property");
      const newHeight = window.scrollY > 0 ? 80 : 0;
   
      setNavbarHeight(newHeight);
      if (window.scrollY > 0 && newHeight > 0) {
        navbar.classList.add("bg-[#283b8b]");
      } else {
        prop.classList.remove("bg-white");
        navbar.classList.add("bg-transparent");
      }


      if(window.scrollY === 0 ){
       
        console.log("jhjhbj")
        prop.classList.add("bg-[#283b8b]")
        prop.classList.remove("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function Openmenu() {
    setOpenmenu(!openmenu); 
  }

  return (
    <nav
      id="navbar"
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 h-${navbarHeight} `}
    >
      <div
        id="property"
        className=" flex flex-wrap items-center justify-between mx-auto p-6"
      >
        <a href className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://naturevalleyschool.org/wp-content/uploads/2024/03/Natures-Valley-Kausani-300x201.png"
            className="h-10"
            alt="Nature Valley Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Nature Valley School
          </span>
        </a>
        <div className="flex ">
          <button
            onClick={Openmenu}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* Always show menu items on desktop */}
        <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1 " id="navbar-cta">
          <ul id="hello" className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 " >
            <li>
              <a
                href
                className="block py-2 px-3 md:p-0 text-xl text-white bg-blue-700 rounded md:bg-transparent cursor-pointer"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href
                className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Inquire
              </a>
            </li>
            <li>
              <a
                href
                className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Visit
              </a>
            </li>
            <li>
              <a
                href
                className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Apply
              </a>
            </li>
          </ul>
        </div>
        {/* Conditional rendering for mobile menu */}
        {openmenu && (
          <div className="md:hidden w-full" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href
                  className="block py-2 px-3 md:p-0 text-xl text-white bg-blue-700 rounded md:bg-transparent cursor-pointer"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href
                  className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Inquire
                </a>
              </li>
              <li>
                <a
                  href
                  className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Visit
                </a>
              </li>
              <li>
                <a
                  href
                  className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Apply
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
     
      </nav>)}

      export default Navbar
