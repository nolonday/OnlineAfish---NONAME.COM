import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { InfoFilms } from "./components/Card/InfoFilms/InfoFilms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/film/:id" element={<InfoFilms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
