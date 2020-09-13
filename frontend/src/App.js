import React from 'react';
// import data from './data';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './product_style.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import SigninScreen from './Screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>

      <div className="grid-container">

        <header className="header">
          <div className="brand">
            <button className="brand-button">
              &#9776;
            </button>
            <Link to="/">Tiffinic</Link>
          </div>

          <div className="menu-links">
            <a href="cart.html">Cart</a>
            <Link to="/signin">Sign In</Link>
            {/* <a href="signin.html">Sign In</a> */}
          </div>
        </header>


        <main className="main">
          <div className="content">

            <Route path="/signin" component={SigninScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />


          </div>
        </main>


        <footer className="footer">
          All rights reserved
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
