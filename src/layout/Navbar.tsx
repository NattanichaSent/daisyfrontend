import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  
  <div className="navbar-end">
    <a className="btn">Add User</a>
  </div>
  <div className="navbar-end">
    <a className="btn">Edit User</a>
  </div>
  <div className="navbar-end">
    <a className="btn">View User</a>
  </div>
</div>
    )
}