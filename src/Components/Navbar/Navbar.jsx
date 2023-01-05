import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-content flex ">
        <div className="brand-and-toggler flex-sb ml-10 flex">
          <Link to="/" className="navbar-brand  flex">
            <img src={logoImg} className="bg-inherit" alt="site logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1 white-space:nowrap;">
              GGanbu.GG
            </span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#8d8686"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav  mr-20">
            <li className="nav-item">
              <Link
                to="/deck"
                className="nav-link text-uppercase fs-18 fw-5 ls-1 text-lg text-black"
              >
                덱 통계
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/leaderboards"
                className="nav-link text-uppercase fs-18 fw-5 ls-1 text-black"
              >
                순위표
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
