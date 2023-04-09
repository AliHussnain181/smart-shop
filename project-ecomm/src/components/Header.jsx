import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { GiHummingbird } from "react-icons/gi"
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = ({isAuthenticated = false}) => {

  let [open, setOpen] = useState(false);


  return (
    <>
      <div className='shadow-md w-full fixed top-0 left-0 mb-16'>
        <div className='md:flex items-center justify-between bg-[#f18fc5] py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl  flex items-center font-[Poppins] text-gray-800 cursor-pointer'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'>
              <GiHummingbird />
            </span>
            Electronic Shop
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <RxHamburgerMenu />
          </div>
          {isAuthenticated ? (
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#f18fc5] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
              <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className='text-gray-800 hover:text-[#f0eaea] duration-500' to={"/"}>HOME</Link></li>
              <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className='text-gray-800 hover:text-[#f0eaea] duration-500' to={"/about"}>ABOUT</Link></li>
              <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className='text-gray-800 hover:text-[#f0eaea] duration-500' to={"/me"}>PROFILE</Link></li>
              <Link className='md:ml-8 text-2xl md:my-0 my-7'  to={'/cart'}><AiOutlineShoppingCart/></Link>
            </ul>
          )
            : (
              <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#f18fc5] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className='text-gray-800 hover:text-[#f0eaea] duration-500' to={"/login"}>LOGIN</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className='text-gray-800 hover:text-[#f0eaea] duration-500' to={"/register"}>SIGNUP</Link></li>
              </ul>
            )
          }
        </div>
      </div>

    </>
  )
}

export default Header