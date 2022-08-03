import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img src={logo} className="App-logo" alt="logo" />
          </nav>
        </header>
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
