import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import auth from '../../utils/auth';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div>
        <h1 className="logo">Company Logo</h1>
        <input type="checkbox" id="mobile-button" />
        <label htmlFor="mobile-button">Menu</label>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            {/* {isLoggedIn && <li><Link to="/create-users">Create Users</Link></li>}
            {isLoggedIn && <li><Link to="/job-applications">Job Applications</Link></li>}
            {isLoggedIn && <li><Link to="/post-jobs">Manage Jobs</Link></li>} */}
            {!isLoggedIn && <li><Link to='login'>Admin Login</Link> </li>}
            {isLoggedIn && <li id="logout" onClick={auth.logout}>Logout</li>}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;