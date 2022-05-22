import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const Navbar = ({ children }) => {
//   const [dark, setDark] = useState(false);
//   const { pathname } = useLocation();

//   const [admin] = useAdmin();

  return (
    <div class='drawer  drawer-end'>
      <input id='my-drawer-3' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col'>
        <div class='w-full navbar bg-base-100 fixed top-0 z-50 lg:px-20'>
          {/* {pathname.includes("dashboard") && (
            <label
              tabindex='0'
              for='my-drawer-2'
              class='btn btn-ghost lg:hidden '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-5 w-5'
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
          <div class='flex-1 px-2 mx-2 text-2xl'>Clean Co.</div>
          <div class='flex-none lg:hidden'>
            <label for='my-drawer-3' class='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                class='inline-block w-6 h-6 stroke-current'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>

          <div class='flex-none hidden lg:block'>
            <ul class='menu menu-horizontal gap-x-2'>
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

              <li class='dropdown dropdown-hover dropdown-end'>
                <label
                  tabindex='0'
                  class='btn btn-primary btn-outline rounded-lg'
                >
                  BOOK NOW
                </label>
                <ul
                  tabindex='0'
                  class='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class='drawer-side'>
        <label for='my-drawer-3' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100'>
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
            tabindex='0'
            class='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'
          >
            <div class='collapse-title text-xl font-medium'>Book Now</div>
            <div class='collapse-content'>
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