import React from 'react';
import { FaSearch } from 'react-icons/fa';
import row from '../assets/row.svg';
import column from '../assets/column.svg';
import filter from '../assets/filter.svg';
import sort from '../assets/sort.svg';
import star from '../assets/star.svg';
import share from '../assets/share.svg';
import download from '../assets/download.svg';
import deleteIcon from '../assets/deleteIcon.svg';

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Search Input Section */}
      <div className="search-input-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="search-input"
        />
      </div>

      {/* Button Groups Section */}
      <div className="button-groups">
        {/* Left Button Group */}
        <div className="left-group">
          <button className="button">
            <img src={row} alt="row" /> 1/1 Row
          </button>
          <button className="button">
            <img src={column} alt="col" /> 3/3 Column
          </button>
          <button className="button">
            <img src={filter} alt="filter" /> 0 Filter
          </button>
          <button className="button">
            <img src={sort} alt="sort" /> Sort
          </button>
        </div>

        {/* Right Button Group */}
        <div className="right-group">
          <button className="enrich-button">
            <img src={star} alt="star" />
            Enrich
          </button>
          <button className="icon-button">
            <img src={share} alt="share" />
          </button>
          <button className="icon-button">
            <img src={download} alt="download" />
          </button>
          <button className="icon-button">
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
