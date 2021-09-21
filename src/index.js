import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  title: "I love You to the Moon and Back",
  author: "Amelia Hepworth",
  imgLink: "https://tinyurl.com/4px79m2u",
};
const secondBook = {
  title: `Magic's Toll: Cursebound`,
  author: "Toni Binns",
  imgLink: "https://tinyurl.com/36b6j9ww",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        imgLink={firstBook.imgLink}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        imgLink={secondBook.imgLink}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          architecto veniam dolore cumque odio maxime quae doloribus deleniti.
        </p>
      </Book>
    </section>
  );
};
const Book = ({ title, author, imgLink, children }) => {
  return (
    <article className="book">
      <img src={imgLink} width="280" height="200" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
