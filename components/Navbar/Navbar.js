import { categories } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const categoryHandler = (categories) => {
    let array = []
    categories.map((data, index) => {
      array.push(
        <li key={index}>
          <Link href={`${Object.values(data).map((item)=>item)}`}>
            {Object.keys(data).map((item) => item)}
          </Link>
        </li>,
      )
    })
    return array
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <a>Categories</a>
              <ul className="p-2 z-50">
               {categoryHandler(categories)}
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"></a>
        <Link className="btn btn-ghost normal-case text-xl" href={'/'}>
          Build your PC
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-0 z-50">
              {categoryHandler(categories)}
                {/* <li>
                  <Link href={'/cpu'}>CPU / Processor</Link>
                </li>
                <li>
                  <Link href={'/motherboard'}>Motherboard</Link>
                </li>
                <li>
                  <Link href={'/ram'}>RAM</Link>
                </li>
                <li>
                  <Link href={'/powersupply'}>Power Supply Unit</Link>
                </li>
                <li>
                  <Link href={'/storage'}>Storage device</Link>
                </li>
                <li>
                  <Link href={'/monitor'}>Monitor</Link>
                </li>
                <li>
                  <Link href={'/others'}>Others</Link>
                </li> */}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">PC Builder</a>
      </div>
    </div>
  )
}

export default Navbar
