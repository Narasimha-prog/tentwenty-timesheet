import React from 'react'

function Footer() {
  return (
    <div className=' flex items-center justify-center mx-9 px-4 py-6 opacity-100 bg-white shadow-md mt-20 rounded-lg'>
    <ul className="flex gap-8  mx-4"> {/* gap-8 = 32px */}
        <li>
          <a href="#link1" className="hover:text-blue-500 transition-colors duration-200">
           
          </a>
        </li>
        <li>
          <a href="#link2" className="hover:text-blue-500 transition-colors duration-200">
            
          </a>
        </li>

        </ul>
      <h2>© 2024 tentwenty. All rights reserved.</h2>
    </div>
  )
}

export default Footer