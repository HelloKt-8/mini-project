import "./styles.css";
import { useState } from "react";

export default function App() {
  const [clickedYes, setClickedYes] = useState(false);
  const [position, setPosition] = useState({ top: 422, left: 300 });

  function yesPressed() {
    setClickedYes(true);
  }

  function againPressed() {
    setClickedYes(false);
    setPosition({ top: 422, left: 300 });
  }

  function handleMouseOver() {
    const container = document.querySelector(".gif-embed");
    const containerRect = container.getBoundingClientRect();

    const button = document.querySelector(".no-button");
    const buttonRect = button.getBoundingClientRect();

    // Calculate new position while keeping the button within container bounds
    const newTop = Math.random() * (containerRect.height - buttonRect.height);
    const newLeft = Math.random() * (containerRect.width - buttonRect.width);

    setPosition({ top: newTop, left: newLeft });
  }

  return (
    <div className="container">
      {clickedYes ? (
        <>
          <div className="text">Miss you more, see you tomorrow ❤️ </div>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="bear-Kissing"
          />
          <button className="again-button" onClick={againPressed}>
            Again?
          </button>
        </>
      ) : (
        <>
          <div className="App">
            <h1>Leng Jai,</h1>
            <h2>Do you miss me??</h2>
          </div>
          <div className="gif-embed">
            <img
              src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif"
              alt="crying bear gif"
            />
            <button
              style={{ top: `${position.top}px`, left: `${position.left}px` }}
              className="no-button"
              onMouseEnter={handleMouseOver}
            >
              NO
            </button>
          </div>
          <button className="yes-button" onClick={yesPressed}>
            YES
          </button>
        </>
      )}
    </div>
  );
}
