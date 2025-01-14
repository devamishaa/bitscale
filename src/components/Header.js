import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import myImage from '../assets/image.svg';

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled); // Toggle the button state
    };

    return (
        <div className="header">
            {/* Left Section */}
            <div className="left-section">
                <FaArrowLeft size={16} color="gray" />
                <input type="text" placeholder="Name of the file" className="file-input" />
            </div>

            {/* Right Section */}
            <div className="right-section">
                <button
                    className={`theme-toggle-button ${isToggled ? 'on' : 'off'}`}
                    onClick={handleToggle}
                >
                    <div className="toggle-circle"></div>
                </button>
                <p className={`auto-save-text ${isToggled ? 'on' : 'off'}`}>Auto Save</p>
                <img src={myImage} alt="icon" className="header-icon" />
            </div>
        </div>
    );
};

export default Header;
