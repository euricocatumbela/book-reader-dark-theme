// import React, { useState, createContext } from "react";
// import uuid from "uuid/v1";
// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, setBook] = useState([
//     {
//       title: "name of the wind",
//       author: "patric Rothfuss",
//     },
//     { title: "the final empire", author: "brandon sanderson" },
//   ]);
//   const addBook = (title, author) => {
//     setBook([...books, { title, author, id: uuid() }]);
//   };
//   const removeBook = (id) => {
//     setBook(books.filter((book) => book.id !== id));
//   };
//   return (
//     <BookContext.Provider value={{ books, addBook, removeBook }}>
//       {props.children}
//     </BookContext.Provider>
//   );
// };

// export default BookContextProvider;
