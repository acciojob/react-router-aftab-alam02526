import React from "react";

function Navigation({ setPage }) {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "10px", listStyle: "none" }}>
        <li>
          <button onClick={() => setPage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setPage("about")}>About</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
