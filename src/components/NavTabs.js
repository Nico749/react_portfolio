import React, { useState } from 'react';
import '../styles/NavTabs.css';

const navItems = [
  { page: 'Home', href: '#home', label: 'Home' },
  { page: 'About', href: '#about', label: 'About' },
  { page: 'AnalyticsProjects', href: '#analytics-projects', label: 'Analytics Projects' },
  { page: 'Projects', href: '#web-dev-projects', label: 'Web Dev Projects' },
  { page: 'Contacts', href: '#contacts', label: 'Contacts' },
];

function NavTabs({ currentPage, handlePageChange }) {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        
          <button
            type="button"
            onClick={() => {
              setisActive(!isActive);
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={isActive}
            className={`navbar-burger burger has-text-white ${isActive ? "is-active" : ""}`}
            
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div
          
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <ul>
              {navItems.map(({ page, href, label }) => (
                <li key={page}>
                  <a
                    href={href}
                    data-analytics={page}
                    onClick={() => {
                      handlePageChange(page);
                      setisActive(false);
                    }}
                    className={`navbar-item has-text-white nav-link ${currentPage === page ? 'active' : ''}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
}

export default NavTabs;
