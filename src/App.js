import React from "react";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import "./App.css";
import Covers from "./components/Covers/Covers";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Music from "./components/Music/Music";
import "./components/fonts/fonts.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app-wrapper-content">
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Covers" component={Covers} />
            <Route path="/Music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
