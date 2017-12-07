import React from 'react';
import BookList from './components/BookList';
import NavigationBar from './components/NavigationBar';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="Wrapper">
        <NavigationBar className="Navbar" />   
          <div className="Contents">
            <BookList />
          </div>
      </div>
    );
  }
}

export default App;