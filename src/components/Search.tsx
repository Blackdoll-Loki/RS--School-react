import React from 'react';

class Search extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className="Search-block">
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}

export default Search;
