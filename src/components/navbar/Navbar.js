import React from 'react';
import NavbarItems from './NavbarItems';

const Navbar = ({ appName, list }) => {
  return (
    <nav className='navbar navbar-expand-lg bg-light fixed-top'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          {appName}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <NavbarItems list={list} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
