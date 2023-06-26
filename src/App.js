import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Section from './components/Section';
import { GlobalProvider } from "./components/GlobalState/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Section />
      </Router>
    </GlobalProvider>
  );
}

export default App;
