import React from 'react';
import BookList from './components/BookList';
import NavigationBar from './components/NavigationBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="Content">
          <h1>Lukuvinkkikirjasto</h1>
          <BookList />
        </div>
      </div>
    );
  }
}

export default App;