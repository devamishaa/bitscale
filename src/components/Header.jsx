import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import myImage from "../assets/image.svg";

const Header = () => {
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(false);

  const handleToggle = () => {
    setIsAutoSaveEnabled((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="left-section">
        <FaArrowLeft size={16} color="gray" />
        <input
          type="text"
          placeholder="Name of the file"
          className="file-input"
        />
      </div>

      <div className="right-section">
        <div className="container">
          <div className="toggle-switch">
            <input
              type="checkbox"
              className="checkbox"
              id="toggle"
              checked={isAutoSaveEnabled}
              onChange={handleToggle}
            />
            <label className="label" htmlFor="toggle">
              <span className="inner" />
              <span className="switch" />
            </label>
          </div>
          Auto Save
        </div>
        <div className="rounded-avatar">
        <img src={myImage} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
