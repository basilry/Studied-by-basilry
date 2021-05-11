import React from 'react';
import Search from './Search';

const Nav = (handleChange) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleChange={handleChange}/>
    </div>
  </nav>
);

export default Nav;
