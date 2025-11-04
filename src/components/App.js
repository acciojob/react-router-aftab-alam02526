import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navigation setPage={setPage} />
      {page === "home" ? <Home /> : <About />}
    </div>
  );
}

export default App;


