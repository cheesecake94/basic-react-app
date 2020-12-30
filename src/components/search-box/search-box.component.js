import React from 'react';
import './search-box.component.css';

export const SearchBox = ({ placeholder, handleSearchChange }) => {
  return <div className="search-box">
    <input type="search" placeholder={placeholder} onChange={handleSearchChange}></input>
  </div>;
}