import React from 'react';
import BookList from './components/BookList';
import NavigationBar from './components/NavigationBar';
import SubmitForm from './components/SubmitForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{}, {}]
    }

    this.getBooks = this.getBooks.bind(this);
  }

  componentWillMount() {
    this.getBooks();
  }

  getBooks = () => {
    fetch('/api/tips')
      .then(res => res.json())
      .then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="Wrapper">
        <NavigationBar />
        <div style={styles.container} >
          <h1>Lukuvinkkikirjasto</h1>
          <div className="PostForm">
            <SubmitForm />
          </div>
          <div style={styles.container}>
            <h2>Tips: </h2>
            <BookList books={this.state.books} />
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