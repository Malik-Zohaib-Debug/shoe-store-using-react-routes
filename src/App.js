import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from './components/Section';

function App() {
  return (
    <Router>
      <Header />
      <Section />
    </Router>
  );
}

export default App;
