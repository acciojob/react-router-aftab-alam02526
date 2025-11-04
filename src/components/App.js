
import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

function App() {
  return (
    <MemoryRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
}

export default App;


