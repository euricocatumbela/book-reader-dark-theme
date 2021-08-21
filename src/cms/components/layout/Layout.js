import React, { useEffect, useState } from "react";
import BookContextProvider from "../context/BookContext";
import NavBar from "../book/Nav";
import BookList from "../book/BookList";
import NewBookForm from "../book/BookForm";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/GlobalStyles";
import Switch from "../switch/Switch";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
    theme === "light" ? setTheme("dark") : setTheme("light");
    setIsActive(!false);
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Switch />
      <GlobalStyles />
      <main>{children}</main>
      <BookContextProvider>
        <NavBar />
        <BookList />
        <NewBookForm />
        <button onClick={() => toggleTheme()}>Change the Theme</button>
      </BookContextProvider>
    </ThemeProvider>
  );
};

export default Layout;
