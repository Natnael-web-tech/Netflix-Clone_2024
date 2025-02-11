import React, { useState } from "react";
import "./Header.css";
import NetflixLogo from "../../assets/Images/netflix-3.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <div className="menu-toggle" onClick={toggleMenu}>
            <MenuIcon />
          </div>
          <ul className={menuOpen ? "menu-active" : ""}>
            <li>
              <img
                className="netflix_logo"
                src={NetflixLogo}
                alt="Netflix Logo"
              />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
