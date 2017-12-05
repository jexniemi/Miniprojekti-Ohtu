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
      <div className="Wrapper">
        <NavigationBar />
        <div style={styles.container} >
          <h1>Lukuvinkkikirjasto</h1>
          <div style={styles.container}>
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginLeft: "1%"
  }
}

export default App;