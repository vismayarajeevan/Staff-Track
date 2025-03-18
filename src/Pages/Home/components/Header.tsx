import React from 'react'

import logo from '../../../assets/logo.png' 


const Header = () => {
  return (
    <header>
        <nav className="bg-[#422b72] text-white ">
          <div className="flex">
            <div>
              <img src={logo} className="w-32 h-24" alt="Logo" />
            </div>
            <ul className="flex p-8 basis-3/6 text-lg	 gap-9 ml-4 cursor-pointer	">
              <li >Home</li>
              <li >useCase</li>
              <li >
                What's new
              </li>
              <li >Why Us</li>
            </ul>
            <div className="flex justify-end p-6 basis-5/12 gap-5	">
              <button
                type="submit"
               
                className="hover:bg-white  md:outline-2  font-bold border-2	w-32 outline-[#422b72] rounded-[10px] hover:text-[#422b72] bg-[#422b72] text-white"
              >
                LogIn
              </button>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Header