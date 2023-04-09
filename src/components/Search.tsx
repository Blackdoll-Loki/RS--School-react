import React from 'react';
import { useState } from 'react';
import '../styles/Search.css';

function Search() {
  const [input, setInput] = useState('');

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    window.localStorage.setItem('input', event.target.value);
    setInput(event.target.value);
  }

  return (
    <div className="Search-block">
      <input type="text" placeholder="Search" onChange={handleInput} value={input} />
    </div>
  );
}

export default Search;
