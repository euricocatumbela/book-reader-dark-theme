import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  console.log(theme);
  return (
    <div>
      <h1 style={{ background: theme.ui }}>Home Context App</h1>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </div>
  );
};

export default Header;
