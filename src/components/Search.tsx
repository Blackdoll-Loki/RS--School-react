import React from 'react';
import '../styles/Search.css';

class Search extends React.Component {
  render() {
    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
      const storage = window.localStorage;
      storage.setItem('input', event.target.value);
    }
    return (
      <div className="Search-block">
        <input type="text" placeholder="Search" onChange={handleInput} />
      </div>
    );
  }
}

export default Search;
