import React from 'react';
import BookList from './components/BookList';
import NavigationBar from './components/NavigationBar';
import './App.css';
import YouTube from 'react-youtube';

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
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    return (
      <div>
        {this.state.view === "books" && <BookList />}
        {this.state.view === "videos" && <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        />}
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