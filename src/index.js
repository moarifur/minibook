import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  title: "I love You to the Moon and Back",
  author: "Amelia Hepworth",
  imgLink: "https://tinyurl.com/4px79m2u",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
      <img src={firstBook.imgLink} width="280" height="200" />
      <h1>{firstBook.title}</h1>
      <h4>{firstBook.author.toUpperCase()}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
