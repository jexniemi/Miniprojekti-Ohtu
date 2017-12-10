import React from 'react';
import BookList from './components/BookList';
import NavigationBar from './components/NavigationBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "books"
    }

    this.changeView = this.changeView.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  changeView(newView) {
    console.log(newView);
    this.setState({
      view: newView
    });
  }

  renderContent() {
    return (
      <div>
        {this.state.view === "books" && <BookList />}
        {this.state.view === "videos" && <p>VIDEOITA!!! :-)</p>}
      </div>
    )
  }

  render() {
    return (
      <div className="Wrapper">
        <NavigationBar changeView={this.changeView} className="Navbar" />   
          <div className="Contents">
            {this.renderContent()}
          </div>
      </div>
    );
  }
}

export default App;