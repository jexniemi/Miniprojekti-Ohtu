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
      <div className="Wrapper" style={{margin: "0 auto"}}>
        <NavigationBar />
        <h1>Lukuvinkkikirjasto</h1>
        <div className="PostForm">
          <SubmitForm />
        </div>
        <BookList books={this.state.books}/>
        <p>Books length: {this.state.books.length}</p>
        <p>Book suggestion from api: {JSON.stringify(this.state.books[1])}</p>
        <p>test book author: {this.state.books[1].author}</p>
      </div>
    );
  }
}

export default App;