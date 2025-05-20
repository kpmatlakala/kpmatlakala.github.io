import React from "react";
import "./FloatingGameButton.css";

const FloatingGameButton = ({ onClick }) => (
  <button className="floating-game-btn" onClick={onClick} title="Open Games">
    🎮
  </button>
);

export default FloatingGameButton;