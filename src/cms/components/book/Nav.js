import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);

  return (
    <div>
      <div>
        <h1>Eurico Reading List</h1>
        <p>Currently you have {books.length} books to get through...</p>
      </div>
    </div>
  );
};

export default NavBar;
