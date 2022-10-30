import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} exact />
        <Route path="/article/:slug" element={<Article />} exact />
      </Routes>
    </div>
  );
}

export default App;
