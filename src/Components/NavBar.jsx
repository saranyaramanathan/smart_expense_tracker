import React from 'react'
import { Link } from 'react-router';
function Navbar() {
  return (
    
      <div className="bg-gray-100 w-full flex justify-between items-center mx-auto text-slate-800 p-4">
         {/* <img class="hidden h-12 w-12 rounded-full sm:block object-cover mr-2 border-4 border-green-400"
                                src="/src/assets/logo.webp" alt=""/>
         <div className='flex justify-center'> <h1 >SMART EXPENSE TRACKER</h1></div> */}
        
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
           <img class="hidden h-12 w-12 rounded-full sm:block object-cover mr-2 border-2 border-green-400"
                                src="/src/assets/Logonew.png" alt=""/>
           
        </a>
         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SMART EXPENSE TRACKER</span>
                           <div className='flex justify-end'>
                  <h2 className='p-2 font-semibold hidden '>About</h2>
                
                    </div>
    
      </div>
      

  )
}

export default Navbar;