import React, { useState } from "react";
import styles from "./Header.module.css";
import NetflixLogo from "../../assets/Images/netflix-3.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header_outer_container}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <div className={styles.menu_toggle} onClick={toggleMenu}>
            <MenuIcon />
          </div>
          <ul className={`${menuOpen ? styles.menu_active : ""}`}>
            <li>
              <img
                className={styles.netflix_logo}
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
        <div className={styles.header_right}>
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
