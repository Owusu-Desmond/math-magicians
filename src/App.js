import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav';
import './App.css';
import Calculator from './pages/Calculator';
import Home from './pages/home';
import Quotes from './pages/quotes';
import Footer from './components/footer';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      // <div className="App">
      //   <header className="App-header">
      //     <nav>
      //       <img src={logo} className="App-logo" alt="logo" />
      //     </nav>
      //   </header>
      //   <main>
      //     <Calculator />
      //   </main>
      // </div>
    );
  }
}

export default App;
