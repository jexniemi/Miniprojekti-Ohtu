import React from 'react';

import NavigationBar from './components/NavigationBar';
import SubmitForm from './components/SubmitForm';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h1>Lukuvinkkikirjasto</h1>
        <div className="PostForm">
        <SubmitForm/>
        </div>
      </div>
    );
  }
}

export default App;