import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'
import { IoSearchSharp } from 'react-icons/io5';
import { RiContactsBookFill } from 'react-icons/ri';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">

          <Link className="navbar-brand" to="/"><RiContactsBookFill className='icon-Brand'/>AGENDA</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/new-contact">Add Contact</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-dark" type="submit"><IoSearchSharp /></button>
            </form>
          </div>

        </div>
      </nav>
    </>
  )
}
