import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          

        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>

      <div className="navbar-end">
        <Link className="btn" to="/adduser">Add User</Link>
      </div>
      
    </div>
  )
}
