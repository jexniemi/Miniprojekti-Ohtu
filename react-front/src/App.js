import React from 'react';
import BookList from './components/BookList';
import NavigationBar from './components/NavigationBar';
import SubmitForm from './components/SubmitForm';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }

    this.getBooks = this.getBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    fetch('/api/tips')
    .then(res => res.json())
    .then(books => this.setState({ books }));
  }

  render() {
    return (
      <div className="Wrapper" style={{margin: "0 auto"}}>
        <NavigationBar />
        <h1>Lukuvinkkikirjasto</h1>
        <div className="PostForm">
          <SubmitForm />
        </div>
        <BookList books={this.state.books}/>
        <p>Books length: {this.state.books.length}</p>
        <p>test book author:</p>
      </div>
    );
  }
}

export default App;