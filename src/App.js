import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'note-4': {
          id: 'note-4',
          title: 'My fancy note',
          body: 'Oh so fancy, I do declare',
        },
        'note-5': {
          id: 'note-5',
          title: 'Another one',
          body: 'Also very fancy',
        },
      },
      currentNote: {
        id: null,
        title: '',
        body: '',
      },
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  saveNote(note) {
    console.log("SAVED")
  }

  render() {
    return (
      <div className="App">
        <Main 
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          setCurrentNote={this.setCurrentNote}
          saveNote={this.saveNote}
        />
      </div>
    );
  }
}

export default App;