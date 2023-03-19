import React from 'react';
import Search from './Search';

class Homepage extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        <Search />
      </div>
    );
  }
}
