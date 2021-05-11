import React from 'react';

const Search = ({handleChange}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={event => handleChange(event.target.value)}/>
    <button className="btn hidden-sm-down">
      검색
    </button>
  </div>
);

export default Search;
