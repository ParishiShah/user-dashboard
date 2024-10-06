import "./navbar.scss";
import React, { useState } from "react";
import NotificationBell from "../notification/NotificationBell";
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle";

const Navbar = ({ userData, notifications, onModeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    onModeChange((prevMode) => !prevMode);
  };

  return (
    <div className="navbar">
      <div className="wrapper d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <h3 className="username">Hello {userData.name}</h3>
        </div>
        <div className="d-flex align-items-center">
          <NotificationBell notifications={notifications} />
          <DarkModeToggle onToggle={toggleDarkMode} isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
