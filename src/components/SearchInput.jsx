import React from 'react';
import { FaSearch } from 'react-icons/fa';
import column from '../assets/column.svg';
import { CiFilter } from "react-icons/ci";
import { IoSparklesOutline } from "react-icons/io5";
import share from '../assets/share.svg';
import download from '../assets/download.svg';
import deleteIcon from '../assets/deleteIcon.svg';
import { LuArrowUpDown } from "react-icons/lu";
import { MdOutlineTableRows } from "react-icons/md";

const SearchBar = () => {

  const handleShare = () => {
    if (navigator.share) {
        navigator
            .share({
                title: 'Share File',
                text: 'Check out this file I’m working on!',
                url: window.location.href, 
            })
            .then(() => console.log('File shared successfully!'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        alert('Sharing is not supported on this browser.');
    }
};

  return (
    <div className="search-bar">
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
            <MdOutlineTableRows fontSize={17} /> 1/1 Row
          </button>
          <button className="button">
            <img src={column} alt="col" /> 3/3 Column
          </button>
          <button className="button">
            <CiFilter fontSize={17} /> 0 Filter
          </button>
          <button className="button">
            <LuArrowUpDown fontSize={17} /> Sort
          </button>
        </div>

        {/* Right Button Group */}
        <div className="right-group">
          <button className="enrich-button">
            <IoSparklesOutline />
            Enrich
          </button>
          <button className="icon-button" onClick={handleShare}>
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
