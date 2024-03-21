import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/navbar/logo.png";
import studio from "../assets/sidebar/studio.svg";
import music from "../assets/sidebar/music.svg";
import kids from "../assets/sidebar/kids.svg";
import TV from "../assets/sidebar/TV.svg";

import Admin from "../administrator/Admin";

// import necessary components

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
              <i className="fa-solid fa-clapperboard"></i> Shorts
            </NavLink>
            <NavLink
              to={"/subscriptions"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-video"></i> Subscriptions
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
              <i className="fa-solid fa-user"></i> Your Channel
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
              to={"/videos"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-play"></i> Your Videos
            </NavLink>
            <NavLink
              to={"/watch"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-clock"></i> Watch Later
            </NavLink>
            <NavLink
              to={"/liked/videos"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-thumbs-up"></i> Liked videos
            </NavLink>
          </div>

          <div className="explore">
            <h4>Explore</h4>
            <NavLink
              to={"/trending"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-fire"></i> Trending
            </NavLink>
            <NavLink
              to={"/shopping"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-bag-shopping"></i> Shopping
            </NavLink>
            <NavLink
              to={"/music"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-music"></i> Music
            </NavLink>
            <NavLink
              to={"/film"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-film"></i> Films
            </NavLink>
            <NavLink
              to={"/live"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-rss"></i> Live
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
              to={"/news"}
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
              <i className="fa-solid fa-user-graduate"></i> Courses
            </NavLink>
            <NavLink
              to={"/beauty"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-vest-patches"></i> Fashion & Beauty
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
              href="https://www.youtube.com/premium/"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={logo} alt="youtube premium" /> YouTube Premium
            </a>
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
              href="https://tv.youtube.com/welcome/"
              className="sidebar-link"
              target={"_blank"}
            >
              <img src={logo} alt="youtube TV" /> YouTube TV
            </a>
          </div>

          <div className="explore">
            <NavLink
              to={"/account"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-gear"></i> Settings
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
              <i className="fa-solid fa-circle-question"></i> Help
            </NavLink>
            <NavLink
              to={"/feedback"}
              className={`sidebar-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              onClick={close}
            >
              <i className="fa-solid fa-message"></i> Send feedback
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
