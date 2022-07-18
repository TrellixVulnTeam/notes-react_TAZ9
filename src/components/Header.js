import React from "react";
const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      {/* the heading of our notes app */}
      <h1>
        <span>React</span> Notes
      </h1>
      {/* this is our toggle button using this button we can change tje background for our app */}
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};
export default Header;
