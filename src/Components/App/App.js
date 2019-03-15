import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends Component {
constructor(props) {
  super(props);
  this.state = {
      searchResults: [name, artist, album, id].
      playlistName: 'don', 
      playlistTracks: [name, artist, album, id]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
}

addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        } else {
            this.setState(prevState => ({
                playlistTracks: [...prevState.playlistTracks, track]
            }))
        }
    }

    removeTrack(track) {
        let removeTrack = this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id);
        if (removeTrack) {
            this.setState(prevState => {
                let newPlaylist = prevState.playlistTracks.slice();
                newPlaylist.splice(removeTrack, 1);
                return {playlistTracks: newPlaylist};
            })
        } else {
            return;
        }
    }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName ={this.state.playlistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
