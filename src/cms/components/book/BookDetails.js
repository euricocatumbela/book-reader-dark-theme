import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = (props) => {
  const { book } = props;
  const { dispatch } = useContext(BookContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
        <div>{book.title}</div>
        <div>{book.author}</div>
      </button>
    </div>
  );
};

export default BookDetails;
