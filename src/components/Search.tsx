import React from 'react';
import '../styles/Search.css';

class Search extends React.Component<Record<string, unknown>, { input: string }> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      input: window.localStorage.getItem('input') || '',
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    window.localStorage.setItem('input', event.target.value);
    this.setState(() => {
      return {
        input: event.target.value,
      };
    });
  }
  render() {
    return (
      <div className="Search-block">
        <input
          type="text"
          placeholder="Search"
          onChange={this.handleInput}
          value={this.state.input}
        />
      </div>
    );
  }
}

export default Search;
