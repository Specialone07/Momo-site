// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/navbar';
import HomePage from './components/body/body';
import Footer from './components/Footer/footer';
import Menu from './components/Menu/menu';

class App extends React.Component {
  componentDidCatch(error, info) {
    console.error("Error caught by App component:", error, info);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<Menu />} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
