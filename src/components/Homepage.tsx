import React from 'react';
import Search from './Search';
import data from 'data';
import { cardData } from 'interfaces';
import Card from './Card';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <div className="Cards-block">
          {data.map((el: cardData, idx: number) => {
            return <Card data={el} key={idx} />;
          })}
        </div>
      </div>
    );
  }
}

export default Homepage;
