import React from "react";
import dude from "./assets/me-dude.jpg";
import walter from "./assets/me-walter.jpg";
import "./App.css";

// const dude = import("./assets/me-dude.jpg");
// const walter = import("./assets/me-walter.jpg");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dude} className="img reg" alt="the-dude" />
        <img src={walter} className="img rev" alt="walter-sobchak" />
      </header>
      <div className="App-main">
        <p>Yeah well, ya know, that's just like, your opinion... man.</p>
        <a
          className="App-link"
          href="https://github.com/eli9000/test-app-ci-cd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Peep da Repo my People!
        </a>
      </div>
    </div>
  );
}

export default App;
