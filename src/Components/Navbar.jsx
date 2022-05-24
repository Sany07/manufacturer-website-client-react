import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from "react-toastify";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    toast.success("Logout Syccessful");
    localStorage.removeItem('accessToken');
    navigate("/login");
  };

  return (
    <div className='drawer  drawer-end'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <div className='w-full navbar bg-base-100 fixed top-0 z-50 lg:px-20'>
          {/* {pathname.includes("dashboard") && (
            <label
              tabindex='0'
              for='my-drawer-2'
              className='btn btn-ghost lg:hidden '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
          )} */}
          <div className='flex-1 px-2 mx-2 text-2xl'>Clean Co.</div>
          <div className='flex-none lg:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>

          <div className='flex-none hidden lg:block'>
            <ul className='menu menu-horizontal gap-x-2'>
              <li>
                <NavLink to='/' className='rounded-lg'>
                  Home
                </NavLink>
              </li>
              {/* {admin && (
                <li>
                  <NavLink to='/dashboard' className='rounded-lg'>
                    Dashboard
                  </NavLink>
                </li>
              )} */}
              <li>
                <NavLink to='/about' className='rounded-lg'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' className='rounded-lg'>
                  Services
                </NavLink>
              </li>

              {user ? <>
             <li>
                <NavLink to='/contact' className='rounded-lg'>
                  Contact
                </NavLink>
              </li>              
              <li>
                <NavLink to='/dashboard' className='rounded-lg'>
                  Dashboard
                </NavLink>
              </li>
                <button className="btn btn-primary btn-outline rounded-lg" onClick={logout} >Sign Out</button> 
                <li className="">
                <span to='' className='rounded-lg'>
                  {user.displayName?.toUpperCase()}
                </span>
                  
                </li>
              </>:
                        <>
              <li>
                <NavLink to='/register' className='rounded-lg'>Sign Up</NavLink>
              </li>
              <li>
                <NavLink to='/login' className='rounded-lg'>Login</NavLink>
              </li>
</>
              }



            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu p-4 overflow-y-auto w-80 bg-base-100'>
          <li>
            <NavLink to='/' className='rounded-lg'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='rounded-lg'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/services' className='rounded-lg'>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='rounded-lg'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className='rounded-lg'>
              Login
            </NavLink>
          </li>
          <div
            tabIndex='0'
            className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'
          >
            <div className='collapse-title text-xl font-medium'>Book Now</div>
            <div className='collapse-content'>
              <li>
                <NavLink to='/contact' className='rounded-lg'>
                  Quick book
                </NavLink>
              </li>
              <li>
                <NavLink to='/login' className='rounded-lg'>
                  Pre book
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;