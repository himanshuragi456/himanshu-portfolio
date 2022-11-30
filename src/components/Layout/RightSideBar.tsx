import React from 'react';
import { Link } from 'react-router-dom';
import './rightSideBar.scss';

const RightSideBar = () => {
  return (
    <div className="right">
      <main className="right__main">
        <div>
          <Link to="/contact" className="right__email">
            hirehimanshuragi@gmail.com
          </Link>
        </div>
        <div className="right__line"></div>
      </main>
    </div>
  );
};

export default RightSideBar;
