import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Drawer from "../Drawer/drawer";

const Navbar = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
 
  const [opendrawer, setOpendrawer]=useState(false)
  const [opendropdown,setopendropdown]=useState(false)


    function opendrawernav(){
    setOpendrawer(!opendrawer)
    console.log(opendrawer,"opendrawer")
  }
  function opendropdownfornavar(){
   setopendropdown(!opendropdown)
   console.log(opendropdown,"opendrawer")
 }

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
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap ">
            Nature Valley School
          </span>
        </a>
        <div className="flex ">
          <button
            onClick={opendrawernav}
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
      
    <div className="hidden md:flex  items-center gap-12 justify-between w-full md:w-auto md:order-1 " id="navbar-cta">
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
                className="block py-2 px-3 md:p-0 text-xl text-white rounded   cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500     dark:border-gray-700"
              >
                Inquire
              </a>
            </li>
            <li>
              <a
                href
                className="block py-2 px-3 md:p-0 text-xl text-white rounded   cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500     dark:border-gray-700"
              >
                Visit
              </a>
            </li>
            <li>
              <a
                href
                className="block py-2 px-3 md:p-0 text-xl text-white rounded  cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500     dark:border-gray-700"
              >
                Apply
              </a>
            </li>
          </ul>
        <div className="flex gap-12">
           
          <FontAwesomeIcon icon="fa-solid fa-clipboard" className="text-white cursor-pointer"/> 
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="text-white cursor-pointer"/>
          <FontAwesomeIcon icon="fa-solid fa-gift" className="text-white cursor-pointer"/> 


          
          <FontAwesomeIcon   icon="fa-solid fa-user" className="text-white cursor-pointer "/>  
          
 
          </div>
         
        
          <div className="mt-2">
            <Drawer/>
          </div>
        </div>
        {/* Conditional rendering for mobile menu */}
        {opendrawer && (
          <div className="md:hidden w-full" id="navbar-cta">
          <div>
    
<div class="text-center ">
<button onClick={opendrawernav}  data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
<FontAwesomeIcon icon="fa-solid fa-bars"  className='text-white text-xl font-medium cursor-pointer'/>
</button>

   
</div>
 <div id="drawer-navigation" class="fixed top-0 right-0  z-70 h-screen p-4 bg-white" tabindex="-1" aria-labelledby="drawer-navigation-label">
<div className='gap-5 justify-between flex'>

    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Contact Naturevalleyschool</h5>
    <button onClick={opendrawernav} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent   rounded-lg text-sm w-8 h-8  top-2.5 end-2.5 inline-flex items-center justify-center  " >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
</div>

  <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-white-500 group">
              
               <span class="ms-3">Summer Camps 2024</span>
            </a>
         </li>
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-white-500" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  
                  <span  class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">About </span>
                  <span onClick={opendropdownfornavar} class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800  dark:hover:bg-white-500 dark:text-gray-300">
               <FontAwesomeIcon icon="fa-solid fa-plus" className='text-black text-xl font-medium cursor-pointer'/>
               </span>
            </button>
             {opendropdown  && 
               <ul id="dropdown-example" class=" py-2 space-y-2">
                  <li>
                     <a href class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-white-500">Summer Camps Catalogue</a>
                  </li>
                  <li>
                     <a href class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:hover:bg-white-500">Summer Camps FAQS</a>
                  </li>
                 
            </ul> }
           
         </li>
         <li>
            <a href class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-white-500 group">
              
               <span class="flex-1 ms-3 whitespace-nowrap">Academics</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800  dark:hover:bg-white-500 dark:text-gray-300">
               <FontAwesomeIcon icon="fa-solid fa-plus" className='text-black text-xl font-medium cursor-pointer'/>
               </span>
            </a>
         </li>
         <li>
            <a href class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-white-500 group">
               
               <span class="flex-1 ms-3 whitespace-nowrap">Addmission</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800  dark:hover:bg-white-500 dark:text-gray-300">
               <FontAwesomeIcon icon="fa-solid fa-plus" className='text-black text-xl font-medium cursor-pointer'/>
               </span>
            </a>
         </li>
         <li>
            <a href class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-white-500 group">
              
               <span class="flex-1 ms-3 whitespace-nowrap">Students Programms</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800  dark:hover:bg-white-500 dark:text-gray-300">
               <FontAwesomeIcon icon="fa-solid fa-plus" className='text-black text-xl font-medium cursor-pointer'/>
               </span>
            </a>
         </li>
         <li>
            <a href class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-white-500 group">
             
               <span class="flex-1 ms-3 whitespace-nowrap">Our Community</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800  dark:hover:bg-white-500 dark:text-gray-300">
               <FontAwesomeIcon icon="fa-solid fa-plus" className='text-black text-xl font-medium cursor-pointer'/>
               </span>
            </a>
         </li>
         <li>
            <a href class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-white-500 group">
              
               <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
         </li>
         <li>
            <a href class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-white-500 group">
             
               <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li>
      </ul>
   </div>

   <div>
          <ul className="flex flex-row font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href
                  className="block py-2 px-3 md:p-0 text-xl text-black hover:bg-gray-100 rounded md:bg-transparent cursor-pointer"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href
                  className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100  cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500     dark:border-gray-700"
                >
                  Inquire
                </a>
              </li>
              <li>
                <a
                  href
                  className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100  cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500     dark:border-gray-700"
                >
                  Visit
                </a>
              </li>
              <li>
                <a
                  href
                  className="block py-2 px-3 md:p-0 text-xl text-gray-900 rounded hover:bg-gray-100  cursor-pointer md:hover:text-blue-700 md:dark:hover:text-blue-500     dark:border-gray-700"
                >
                  Apply
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex gap-2">
        <FontAwesomeIcon icon="fa-solid  fa-user " className="text-black cursor-pointer mt-1"/>  
          <span>User</span>
          </div>
          <div className="flex gap-2">
          <FontAwesomeIcon icon="fa-solid fa-clipboard " className="text-black cursor-pointer mt-1"/> 
          <span>Addmission Portal</span>
          </div>

          <div className="flex gap-2">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass " className="text-black cursor-pointer mt-1"/>
          <span>Search</span>
          </div>

          <div className="flex gap-2">
         
          <FontAwesomeIcon icon="fa-solid fa-gift " className="text-black cursor-pointer mt-1"/>    
            <span>Gift</span>
          </div>
           
       
          </div>
</div> 


</div>
         
           
          </div>
        )}
      </div>
     
      </nav>)}

      export default Navbar
