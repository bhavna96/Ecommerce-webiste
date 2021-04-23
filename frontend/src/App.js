import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Product from "./screen/Product";
import Home from "./screen/Home";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu} className="open">
              &#9776;
            </button>
            <Link to="/">Shopping</Link>
          </div>
          <div className="header-links">
            <a href="'cart.html">Cart</a>
            <a href="signin">Sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button
            className="sidebar-close-button"
            onClick={closeMenu}
            id="button"
          >
            X
          </button>
          <ul>
            <li>
              <a href="index.html" id="mobile">
                Mobile
              </a>
            </li>
            <li>
              <a href="index.html" id="headphone">
                HeadPhone
              </a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products/:id" component={Product}></Route>
            <Route path="/" exact={true} component={Home}></Route>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
