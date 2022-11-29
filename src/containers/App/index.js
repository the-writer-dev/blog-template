import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "../../components/Nav";
import HomeContainer from "../Home";
import ArticlesContainer from "../Articles";
import ArticleContainer from "../Article";
import CategoriesContainer from "../Categories";
import ProjectsContainer from "../Projects";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Nav />
      <AnimatedRoutes />
    </div>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomeContainer />} exact />
        <Route path="/home" element={<HomeContainer />} exact />
        <Route path="/articles" element={<ArticlesContainer />} exact />
        <Route path="/article/:slug" element={<ArticleContainer />} exact />
        <Route
          path="/category/:slug"
          element={<CategoriesContainer />}
          exact
        />
        <Route path="/projects" element={<ProjectsContainer />} exact />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
