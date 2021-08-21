import React from "react";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div>
      {books.map((book) => (
        <ul>
          <BookDetails book={book} key={book.id} />
        </ul>
      ))}
    </div>
  ) : (
    <div>
      <p>No books to read. Hello free time :) </p>
    </div>
  );
};

export default BookList;
