import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Home from "../Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/articles" element={<Articles />} exact />
        <Route path="/article/:slug" element={<Article />} exact />
      </Routes>
    </div>
  );
}

export default App;
