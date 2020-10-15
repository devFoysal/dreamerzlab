import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="primary-menu" id="primaryMenu">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link href="#">
            <a className="navbar-brand nav-link text-uppercase">Dreamerzlab</a>
          </Link>
          <nav className="navbar-nav">
            <ul className="d-flex align-items-center menu-list">
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Home</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">About</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Service</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
