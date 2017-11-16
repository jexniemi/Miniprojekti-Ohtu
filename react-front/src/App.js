import React from 'react';

import InputForm from './components/InputForm.js';
import NavigationBar from './components/NavigationBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h1>Lukuvinkkikirjasto</h1>
        < InputForm />
      </div>
    );
  }
}

export default App;