import { useEffect, useState } from 'react';
import './App.css'

const App = () => {
  
  const [quote, setQuote] = useState(''); 
  const [author, setAuthor] = useState(false);
  
  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    },[]);

  let onClickHandler = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
    }
  
  return (
    <div className="app">
        <div className="card">
          <p className="heading">{quote}</p>
          <p className="author">{author}</p>
         <button className="button" onClick={onClickHandler}>
                <span>GIVE ME QUOTES!</span>
                </button>
        </div>
        
      </div>
  );
}

export default App;
