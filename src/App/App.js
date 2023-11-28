//import logo from '../logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const handleSearchValueChange = ({ target }) => {
    setSearchValue(target.value);
    console.log(searchValue);
  };

  const fakeTrackArray = [
    {
      name: 'Spear Fingers',
      artist: 'D-Tickle',
      album: 'Scorched Ribs',
      id: 1,
    },
    {
      name: 'Get it in the Morning',
      artist: 'Evergreen',
      album: 'The Jedi Live On',
      id: 2,
    },
    {
      name: 'Save Us From Your Face',
      artist: 'Shutdown',
      album: 'Unalive Yourself',
      id: 3,
    }
  ];




  return (
    <div className="App">
      <SearchBar
        searchValue={searchValue}
        handleSearchValueChange={handleSearchValueChange}
      />
    </div>
  );
}

export default App;
