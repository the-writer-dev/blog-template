import React from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./utils/apolloClient";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
);
