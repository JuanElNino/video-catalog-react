import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VideoCatalog from "./pages/Video-catalog";
import Footer from './parts/Footer';
import Header1 from './parts/Header1';
import Header2 from './parts/Header2';
import Header3 from './parts/Header3';
import Header4 from './parts/Header4';

function App() {
  return (
    <Router>
      <div>
        <div class="tm-page-wrap mx-auto">
          <Switch>
            <Route exact path="/">
              <Header1 />
              <Home />
            </Route>
            <Route exact path="/about">
              <Header2 />
              <About />
            </Route>
            <Route exact path="/contact">
              <Header3 />
              <Contact />
            </Route>
            <Route exact path="/video">
              <Header4 />
              <VideoCatalog />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
