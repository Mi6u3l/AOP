import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {  
  constructor() {
    super();
    this.state = {
      assets: [],
      trackUrl: ''
    };
  }

  getAssets = () => {
    axios.get('http://192.168.10.91:9000/static/info')
      .then(assetResponse => { 
        this.setState({ 
          assets: assetResponse.data._embedded.Asset
        });
      });
  }

  getTrack = () => {
    axios.get('http://192.168.10.91:9000/music/info')
      .then(musicResponse => {
        this.setState({ 
          trackUrl: musicResponse.data.trackUrl
        });
      });
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.getTrack}>Get track</button>
          <button onClick={this.getAssets}>Get assets</button>
        </div>
        {this.state.trackUrl && 
          <audio src={this.state.trackUrl} controls autoPlay/>
        }
        <div>
          {this.state.assets && this.state.assets.map((asset, index) => {
            return <div key={index}>{asset.title}</div>
          })}
        </div>
        <div>
          {this.state.assets && this.state.assets.map((asset, index) => {
            return <img alt="oasis" key={index} src={asset.image} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
