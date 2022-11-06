import React from 'react';

const NavbarItems = ({ list }) => {
  return (
    <ul className='navbar-nav'>
      {list.map((item) => {
        return (
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='/'>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarItems;
