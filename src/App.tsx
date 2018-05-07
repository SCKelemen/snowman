import * as React from 'react';
import './App.css';
import Builder from './components/builder'
import logo from './Snowflake.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Snowflake Builder</h1>
        </header>
        <Builder/>
      </div>
    );
  }
}

export default App;