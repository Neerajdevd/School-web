import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Drawer=()=>{

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

    return (
      
<div>
    
<div class="text-center">
<button onClick={opendrawernav}  data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">

<FontAwesomeIcon icon="fa-solid fa-bars"  className='text-white text-xl  font-medium cursor-pointer'/>
</button>

   
</div>
{ opendrawer  &&  <div id="drawer-navigation" class="fixed top-0 right-0  z-70 h-screen p-12 bg-white" tabindex="-1" aria-labelledby="drawer-navigation-label">
<div className='gap-2 flex'>

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
</div> }


</div>


    )
}


export default Drawer