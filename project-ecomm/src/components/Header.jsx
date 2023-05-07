import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { GiHummingbird } from "react-icons/gi"
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai"

const Header = ({ isAuthenticated = false }) => {

  let [open, setOpen] = useState(false);


  return (
    <>
      <div className='shadow-md w-full fixed top-0 left-0 mb-16'>
        <div className='md:flex items-center justify-between bg-[#000080] text-white py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl  flex items-center hover:text-[#fef08a] duration-500  cursor-pointer'>
            <span className='text-2xl mr-1 font-Roboto pt-2'>
              <GiHummingbird />
            </span>
            SMART SHOP
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <RxHamburgerMenu />
          </div>
          {isAuthenticated ? (
            <ul onClick={() => setOpen(!open)}  className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#000080] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
              <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className=' hover:text-[#fef08a] duration-500' to={"/"}>HOME</Link></li>
              <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className=' hover:text-[#fef08a] duration-500' to={"/about"}>ABOUT</Link></li>
              <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className=' hover:text-[#fef08a] duration-500' to={"/me"}>PROFILE</Link></li>
              <Link className='md:ml-8 text-2xl md:my-0 my-7' to={'/cart'}><AiOutlineShoppingCart /></Link>
            </ul>
          )
            : (
              <ul onClick={() => setOpen(!open)}  className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#000080]  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className=' hover:text-[#fef08a] duration-500' to={"/"}>HOME</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className=' hover:text-[#fef08a] duration-500' to={"/login"}>LOGIN</Link></li>
                <li className='md:ml-8 text-xl md:my-0 my-7' ><Link className=' hover:text-[#fef08a] duration-500' to={"/register"}>SIGNUP</Link></li>
                <Link className='md:ml-8 text-2xl md:my-0 my-7' to={'/cart'}><AiOutlineShoppingCart /></Link>
              </ul>
            )
          }
        </div>
      </div>

    </>
  )
}

export default Header