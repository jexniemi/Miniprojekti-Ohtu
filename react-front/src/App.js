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
        }
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    console.log(newView);
    this.setState({
      view: newView
    });
  }

  render() {
    return (
      <div className="Wrapper">
        <NavigationBar changeView={this.changeView} className="Navbar" />   
          <div className="Contents">
            <BookList view={this.state.view}/>
          </div>
      </div>
    );
  }
}

export default App;