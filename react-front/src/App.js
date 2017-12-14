import React from 'react';
import BookList from './components/BookList';
import NavigationBar from './components/NavigationBar';
import './App.css';
import YouTube from 'react-youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        viewName: "books",
        target: "Book",
        field1: "Author",
        field2: "Book title"
      },
      books: []
    }
    this.changeView = this.changeView.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.updateBooks = this.updateBooks.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  changeView(newView) {
    this.getBooks();
    this.setState({
      view: newView
    });
  }

    getBooks = () => {
      fetch('/api/tips')
        .then(res => res.json())
        .then(books => {
          this.setState({
            books: books
          })
        }).catch(function () {
          console.log('Could not fetch books');
        });
    }

    removeBook(_id) {
      var newBooks = this.state.books.filter(book => book._id !== _id);
      this.setState({
        books: newBooks,
        bookList: newBooks
      });
    }

    updateBooks(books) {
      this.setState({
        bookList: books
      })
    }

    render() {
      return (
        <div className="Wrapper">
          <NavigationBar changeView={this.changeView} className="Navbar" />
          <div className="Contents">
            <BookList
              view={this.state.view}
              books={this.state.books}
              removeBook={this.removeBook}
              updateBooks={this.updateBooks}
              getBooks={this.getBooks} />
          </div>
        </div>
      );
    }
  }

  export default App;