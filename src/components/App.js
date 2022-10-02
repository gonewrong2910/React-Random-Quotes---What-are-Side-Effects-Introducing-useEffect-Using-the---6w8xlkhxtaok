import React from "react";
import { useState,useEffect } from "react";
import "../styles/App.css";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
];

const App = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  
  useEffect(()=>{
  fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setText(data.content);
        setAuthor(data.author);})}
  ,[])


  const fetchQ = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setText(data.content);
        setAuthor(data.author);
        document.getElementsByTagName("body")[0].style.backgroundColor =
          colors[parseInt(Math.random() * 10)];
      });
  };

  return (
    <div id="main">
      <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">{text}</div>
          <div className="quote-author">{author}</div>
          <div className="buttons">
            <button className="button" id="new-quote" onClick={fetchQ}>
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
