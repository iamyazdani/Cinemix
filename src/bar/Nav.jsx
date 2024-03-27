import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/navbar/logo.png";
import NotiBox from "../components/NotiBox";

// import necessary components

const Nav = ({ sideBar, setsideBar }) => {
  const sideBarButtonHandle = () => {
    setsideBar(!sideBar);
  };

  // handling search
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const SearchButton = (e) => {
    e.preventDefault();
    searchTerm && navigate(`/search/${searchTerm}`);
  };

  // handling noti box
  const [notiBox, setNotiBox] = useState(false);

  // jsx
  return (
    <>
      <div className="nav">
        <div className="logos_1">
          <i className="fa-solid fa-bars" onClick={sideBarButtonHandle}></i>
          <Link to={"/"}>
            <img src={logo} alt="youtube logo" />
            <h4>Cinemix<sup className="logo-superset">IN</sup></h4>
          </Link>
        </div>
        <form className="input-box" onSubmit={SearchButton}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={SearchButton}
          ></i>
        </form>

        {/* <div className="logos_2">
          <i
            className="fa-solid fa-microphone"
            onClick={() => setNotiBox(!notiBox)}
          ></i>
        </div> */}
        
        <div className="logos_2">
          <a
            href="https://studio.youtube.com/"
            target="_blank"
          >
            <i className="fa-solid fa-folder-plus"></i>
          </a>
          <i
            className="fa-solid fa-bell"
            onClick={() => setNotiBox(!notiBox)}
          ></i>
        </div>
      </div>
      {notiBox && <NotiBox />}
    </>
  );
};

export default Nav;
