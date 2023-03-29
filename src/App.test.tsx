import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './components/Search';
import Card from './components/Card';
import About from 'components/About';
import data from 'data';
import { cardData } from './interfaces/interfaces';

describe('Search', () => {
  it('renders Search component', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
describe('Card', () => {
  it('renders Card component', () => {
    const data = {
      name: 'Blim Blam',
      status: 'Alive',
      species: 'Alien',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/50.jpeg',
    };
    render(<Card data={data} key={1} />);
    expect(screen.getByAltText('photo')).toBeInTheDocument();
    expect(screen.getByText('Blim Blam')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
    expect(screen.getByText('Alien')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
  });
});
describe('List of Cards', () => {
  it('renders list of Cards', () => {
    render(
      <div className="Cards-block">
        {data.map((el: cardData, idx: number) => {
          return <Card data={el} key={idx} />;
        })}
      </div>
    );
    const cardElements = screen.getAllByRole('card');
    expect(cardElements.length).toBe(data.length);
  });
});
describe('About', () => {
  it('renders About page', () => {
    render(<About />);
    expect(screen.getByText('About us page')).toBeInTheDocument();
  });
});
