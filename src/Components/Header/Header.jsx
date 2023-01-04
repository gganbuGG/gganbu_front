import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex-c flex text-center text-white">
          <h2 className="header-title text-capitalize">GGanbu.GG</h2>
          <br />
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
