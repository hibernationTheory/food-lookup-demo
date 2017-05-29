import React, { Component } from 'react';
import Client from './Client';

class App extends Component {
  onClick() {
    Client.search('hello')
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    return (
      <div>
        Hello World
        <button onClick={this.onClick.bind(this)}>Test API</button>
      </div>
    );
  }
}

export default App;
