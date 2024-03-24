import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactPage as ContactIcon,
  Login as LoginIcon,
  Widgets as WidgetsIcon,
  Collections as CollectionsIcon,
  Article as ArticleIcon,
  EditRoad as EditRoadIcon,
} from "@mui/icons-material"; // Importing necessary components and icons
import Logo from "../../assets/images/logo.png"; // Importing logo image
import "./DrawerAppBar.css"; // Importing styles

export default function DrawerAppBar() {
  const [showNavbar, setShowNavbar] = useState(false); // State for controlling navbar visibility
  const [showDropdown, setShowDropdown] = useState(false); // State for controlling dropdown visibility
  const dropdownRef = useRef(null); // Reference to the dropdown element

  // Function to toggle navbar visibility
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Function to handle click on info corner
  const handleInfoCornerClick = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle click outside the dropdown
  const handleClickOutsideDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []); // Run only once when component mounts

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            height="60px"
            style={{
              marginRight: "10px",
            }}
          />
          <span className="logo-name">BORREST SOLUTION PVT LTD</span>
        </div>
        {/* Menu icon for mobile */}
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon
            style={{ cursor: "pointer", color: "white", fontSize: 40 }}
          />
        </div>
        {/* Navigation elements */}
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            {/* Home link */}
            <li>
              <NavLink to="/">
                <HomeIcon style={{ color: "white", marginRight: "10px" }} />
                Home
              </NavLink>
            </li>
            {/* Info Corner with dropdown */}
            <li ref={dropdownRef}>
              <a href="#" onClick={handleInfoCornerClick}>
                <WidgetsIcon style={{ color: "white", marginRight: "10px" }} />
                Info Corner
              </a>
              {showDropdown && (
                <ul className="dropdown" style={{ display: "block" }}>
                  {/* Gallery link */}
                  <li>
                    <NavLink to="/gallery">
                      <CollectionsIcon
                        style={{ color: "white", marginRight: "10px" }}
                      />
                      Gallery
                    </NavLink>
                  </li>
                  {/* Articles link */}
                  <li>
                    <NavLink to="/blogs">
                      <ArticleIcon
                        style={{ color: "white", marginRight: "10px" }}
                      />
                      Articles
                    </NavLink>
                  </li>
                  {/* Procedure link */}
                  <li>
                    <NavLink to="/procedure">
                      <EditRoadIcon
                        style={{ color: "white", marginRight: "10px" }}
                      />
                      Procedure
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            {/* About link */}
            <li>
              <NavLink to="/about">
                <InfoIcon style={{ color: "white", marginRight: "10px" }} />
                About
              </NavLink>
            </li>
            {/* Contacts link */}
            <li>
              <NavLink to="/contacts">
                <ContactIcon style={{ color: "white", marginRight: "10px" }} />
                contacts
              </NavLink>
            </li>
            {/* Login link */}
            <li>
              <NavLink to="/login">
                <LoginIcon style={{ color: "white", marginRight: "10px" }} />
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
