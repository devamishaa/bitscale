import React from 'react';
import card from '../assets/card.svg';
import circle from '../assets/circle.svg';
import puzzle from '../assets/puzzle.svg';
import stack from '../assets/stack.svg';
import table from '../assets/table.svg';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="icon-group">
                <img src={table} alt="table" className="icon" />
                <img src={puzzle} alt="puzzle" className="icon" />
                <img src={circle} alt="circle" className="icon" />
            </div>
            <div className="icon-group gap-large">
                <img src={card} alt="card" className="icon" />
                <img src={stack} alt="stack" className="icon" />
            </div>
        </div>
    );
};

export default SideBar;
