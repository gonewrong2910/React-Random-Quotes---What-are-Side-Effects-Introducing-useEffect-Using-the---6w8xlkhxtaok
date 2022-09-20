import React ,{useState , useEffect} from "react";
import axios from 'axios'
import "../styles/App.css";

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

 
const App = () => {
  const [quotes , setQuotes] = useState([])
  const [author , setAuthor] = useState([])
  let color = parseInt(Math.random()*12);
     async function generateQuotes(){
      
      let res = await fetch('https://api.quotable.io/random');
      let data = await res.json();
      setQuotes(data.content)
      setAuthor(data.author)
      }
     
     useEffect(()=>{
      document.body.style.backgroundColor = colors[color]
     })
    return (
      <div id="main">
        <div id="wrapper">
        <div className="quote-text">
            <h2>{quotes}</h2>
        </div>
        <div className="quote-author">
          { author}
        </div>
        <div className="buttons">
          <button onClick={generateQuotes} id='new-quote' className="button">Click</button>
          </div>
        </div>
      </div>
    );

    }
export default App;
