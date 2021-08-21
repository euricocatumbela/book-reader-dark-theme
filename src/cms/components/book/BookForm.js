import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import styled from "styled-components";
const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
    console.log(title, author);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="book title"
        value={title}
        onChange={handleTitle}
        required
      />
      <Input
        type="text"
        placeholder="book author"
        value={author}
        onChange={handleAuthor}
        required
      />
      <Input type="submit" value="add book" />
    </Form>
  );
};

export default NewBookForm;

const Form = styled.form`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 200px;
  gap: 20px;
`;
const Input = styled.input``;
