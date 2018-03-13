import React, { Component } from 'react';
import Counter from './containers/Counter';
import store from './reducers/reducer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter store = {store}/>
      </div>
    );
  }
}

export default App;
