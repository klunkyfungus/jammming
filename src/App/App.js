//import logo from '../logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js'
import EditPlaylist from '../Playlists/EditPlaylist.js';
import ListPlaylists from '../Playlists/ListPlaylists.js';

let fakePlaylistsList = [
  {
  name: 'Fake Playlist 1',
  playlistIndex: 0,
  trackList: [
    {
      name: 'Spear Fingers',
      artist: 'D-Tickle',
      album: 'Scorched Ribs',
      id: 1,
    },
    {
      name: 'Get it in the Evening',
      artist: 'Evergreen',
      album: 'The Jedi Live On',
      id: 4,
    },
    {
      name: 'You Are Not Worthy',
      artist: 'Shutdown',
      album: 'Unalive Yourself',
      id: 5,
    }]
  }, 
  {
    name: 'Fake Playlist 2',
    playlistIndex: 1,
    trackList: [
      {
        name: 'Blooorp',
        artist: 'D-Tickle',
        album: 'Bliiiip',
        id: 16,
      },
      {
        name: 'Pooplebop',
        artist: 'Evergreen',
        album: 'The Jedi Live On',
        id: 25,
      },
      {
        name: 'You Are Not Worthy',
        artist: 'Shutdown',
        album: 'Unalive Everyone Else',
        id: 225,
      }
    ]
  }
];


function App() {
  
  const [searchValue, setSearchValue] = useState('');
  const handleSearchValueChange = ({ target }) => {
    setSearchValue(target.value);
    //console.log(searchValue);
  };

  let fakeSearchResultsArray = [
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

  const [searchResults, setSearchResults] = useState(fakeSearchResultsArray);
  
  const handleTrackAdd = ({ target }) => {
    let trackIndex = target.parentNode.attributes.listid.value;
    //console.log(trackIndex);
    let playlistToUpdate = JSON.parse(JSON.stringify(selectedPlaylist));
    let shouldSongBeAdded;
    console.log(shouldSongBeAdded);
    console.log(playlistToUpdate.trackList.length === 0 ? true : false);
    if (playlistToUpdate.trackList.length !== 0) {
      for (const track of playlistToUpdate.trackList) {
        if (track.id === fakeSearchResultsArray[trackIndex].id) {
          return shouldSongBeAdded = false;
        } else {
          shouldSongBeAdded = true;
        }
      }
    } else {
      shouldSongBeAdded = true;
    }
    console.log(shouldSongBeAdded);
    if (shouldSongBeAdded) {
      playlistToUpdate.trackList.push(fakeSearchResultsArray[trackIndex]);
      setSelectedPlaylist({...playlistToUpdate});
      console.log(selectedPlaylist);
    }
  }

  const [playlistsList, setPlaylistsList] = useState(fakePlaylistsList);
  console.log('playlists list')
  console.log(playlistsList);
  const [selectedPlaylist, setSelectedPlaylist] = useState({ 
    name: '',
    playlistIndex: '',
    trackList: []
  });
  //console.log(selectedPlaylist);
  //const [playlistIndex, setPlaylistIndex] = useState('');

  const handleSelectPlaylistToEdit = ({ target }) => {
    let playlistIndex = target.attributes.listid.value;
    let thePlaylist = JSON.parse(JSON.stringify(fakePlaylistsList[playlistIndex]));
    //console.log(playlistIndex);
    setSelectedPlaylist({...thePlaylist});
    //setPlaylistIndex(playlistIndex);
  }
  //console.log(selectedPlaylist.playlistIndex ? true : false);
  const handlePlaylistTitleEdit = ({ target }) => {
    let newTitle = target.value;
    let playlistUpdation;
    console.log(playlistsList.length);
    console.log(selectedPlaylist.playlistIndex ? true: false);
    selectedPlaylist.playlistIndex ? playlistUpdation = {...selectedPlaylist} : (selectedPlaylist.trackList.length !== 0 ? playlistUpdation = {...selectedPlaylist} : playlistUpdation = { 
      name: '',
      playlistIndex: playlistsList.length,
      trackList: []
    })
    //let playlistUpdation = {...selectedPlaylist};
    playlistUpdation.name = newTitle;
    console.log(playlistUpdation);
    setSelectedPlaylist({...playlistUpdation});
    console.log(selectedPlaylist);
  }

  const handleTrackRemove = ({ target }) => {
    let trackIndex = target.parentNode.attributes.listid.value;
    let playlistToUpdate = {...selectedPlaylist};
    console.log([playlistToUpdate]);
    playlistToUpdate.trackList.splice(trackIndex, 1);
    setSelectedPlaylist({...playlistToUpdate});
  }

  const handleSavePlaylistEdits = ({ target }) => {
    let playlistListUpdations = [...playlistsList];
    console.log('playlist index: ' + selectedPlaylist.playlistIndex);
    selectedPlaylist.playlistIndex < playlistListUpdations.length ? playlistListUpdations.splice([selectedPlaylist.playlistIndex], 1, selectedPlaylist) : playlistListUpdations.push(selectedPlaylist);
    //playlistListUpdations.splice([selectedPlaylist.playlistIndex], 1, selectedPlaylist);
    console.log(playlistListUpdations);
    setPlaylistsList([...playlistListUpdations]);
    fakePlaylistsList = [...playlistListUpdations];
    handleSelectedPlaylistClose();
  }

  const handleSelectedPlaylistClose = () => {
    setSelectedPlaylist({ 
      name: '',
      playlistIndex: '',
      trackList: []
    });
  }

  console.log(selectedPlaylist);
  return (
    <>
      <div className="SearchBar">
        <SearchBar
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
        />
      </div>
      <div className="SearchResults">
        {searchValue !== '' ? <SearchResults searchResults={searchResults} handleTrackAdd={handleTrackAdd}/> : null}
      </div>
      <div className='SelectedPlaylist'>
       <EditPlaylist selectedPlaylist={selectedPlaylist} handleSelectedPlaylistClose={handleSelectedPlaylistClose} handleTrackRemove={handleTrackRemove} handlePlaylistTitleEdit={handlePlaylistTitleEdit} handleSavePlaylistEdits={handleSavePlaylistEdits}/>
      </div>
      <div className='PlaylistsList'>
        <ListPlaylists playlistsList={playlistsList} handleSelectPlaylistToEdit={handleSelectPlaylistToEdit}/>
      </div>
      
    </>
  );
}

export default App;
