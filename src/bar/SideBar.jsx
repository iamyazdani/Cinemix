import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import studio from "../assets/sidebar/studio.svg";
import music from "../assets/sidebar/music.svg";
import kids from "../assets/sidebar/kids.svg";
import TV from "../assets/sidebar/TV.svg";

import Admin from "../administrator/Admin";

// import necessary components ^^^^^

const SideBar = ({ sideBar, setsideBar }) => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setsideBar(false);
      } else {
        setsideBar(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // disable the window scroll when click is true

  function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  if (sideBar && window.innerWidth < 1000) {
    disableScroll();
  } else {
    enableScroll();
  }

  // closing sideBar on every route
  function close() {
    if (window.innerWidth < 1000) {
      setsideBar(false);
    }
  }

  // jsx
  return (
    <>
      {sideBar && (
        <div className="sb-big">
          <div className="home">
            <NavLink
              to={"/"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              to={"/shorts"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-shorts"></i> Shorts
            </NavLink>
            <NavLink
              to={"/subscriptions"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-subscription"></i> Subscriptions
            </NavLink>
            <NavLink
              to={"/explore"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-globe"></i> Explore
            </NavLink>
          </div>

          <div className="explore">
            <h4>You</h4>
            <NavLink
              to={"/channel"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-profile"></i> Your Channel
            </NavLink>
            <NavLink
              to={"/history"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-history"></i> History
            </NavLink>
            <NavLink
              to={"/channel"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-video"></i> Your Videos
            </NavLink>
            <NavLink
              to={"/playlist"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-clock"></i> Watch Later
            </NavLink>
            <NavLink
              to={"/playlist"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-like"></i> Liked videos
            </NavLink>
          </div>

          <div className="explore">
            <h4>Explore</h4>
            <NavLink
              to={"/feed"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-fire"></i> Trending
            </NavLink>
            <NavLink
              to={"/channel"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-shop"></i> Shopping
            </NavLink>
            <NavLink
              to={"/channel"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-music"></i> Music
            </NavLink>
            <NavLink
              to={"/feed"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-film"></i> Films
            </NavLink>
            <NavLink
              to={"/channel"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-connect"></i> Live
            </NavLink>
            <NavLink
              to={"/gaming"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-gamepad"></i> Gaming
            </NavLink>
            <NavLink
              to={"/channel"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-newspaper"></i> News
            </NavLink>
            <NavLink
              to={"/sports"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-trophy"></i> Sport
            </NavLink>
            <NavLink
              to={"/learning"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-graduation-cap"></i> Courses
            </NavLink>
            <NavLink
              to={"/beauty"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-vest"></i> Fashion & Beauty
            </NavLink>
            <NavLink
              to={"/podcasts"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-podcast"></i> Podcasts
            </NavLink>
          </div>

          <div className="explore">
            <h4>More From YouTube </h4>
            <a
              href="https://studio.youtube.com/"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={studio} alt="youtube studio" /> YouTube Studio
            </a>
            <a
              href="https://music.youtube.com/"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={music} alt="youtube music" /> YouTube Music
            </a>
            <a
              href="https://www.youtube.com/kids/"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={kids} alt="youtube kids" /> YouTube Kids
            </a>
            <a
              href="https://tv.youtube.com/welcome/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273&utm_servlet=prod"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={TV} alt="youtube TV" /> YouTube TV
            </a>
          </div>

          <div className="explore">
            <NavLink
              to={"/account"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-setting"></i> Settings
            </NavLink>
            <NavLink
              to={"/reporthistory"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-flag"></i> Report History
            </NavLink>
            <NavLink
              to={"/help"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-help"></i> Help
            </NavLink>
            <NavLink
              to={"/feedback"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-feedback"></i> Send feedback
            </NavLink>
          </div>
          <Admin />
        </div>
      )}

      {/* --------------------------- */}

      {!sideBar && (
        <div className="sb-small">
          <NavLink
            to={"/"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-house"></i> Home
          </NavLink>
          <NavLink
            to={"/explore"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-globe"></i> Explore
          </NavLink>
          <NavLink
            to={"/gaming"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-gamepad"></i> Gaming
          </NavLink>
          <NavLink
            to={"/beauty"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-vest"></i> Fashion & Beauty
          </NavLink>
          <NavLink
            to={"/learning"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-graduation-cap"></i> Learning
          </NavLink>
          <NavLink
            to={"/sports"}
            className={`sidebar-link-sm ${({ isActive }) =>
              isActive ? "active" : ""}`}
          >
            <i className="fa-solid fa-medal"></i> Sports
          </NavLink>
        </div>
      )}
    </>
  );
};

export default SideBar;
