import { useEffect, useState } from "react";

const COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#FFD93D",
];

const App = () => {
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || 0
  );
  const [targetColor, setTargetColor] = useState("");
  const [options, setOptions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  const selectRandomTargetColor = () => {
    const targetIndex = Math.floor(Math.random() * COLORS.length);
    const randomColor = COLORS[targetIndex];
    setTargetColor(randomColor);

    const shuffledOptions = COLORS.sort(() => Math.random() - 0.5);
    setOptions(shuffledOptions);
  };
  useEffect(() => {
    selectRandomTargetColor();
  }, []);
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const compareColors = (option) => {
    if (targetColor === option) {
      selectRandomTargetColor();
      setScore((prev) => prev + 1);

      setIsCorrect(true);
    } else if (targetColor !== option) {
      setIsCorrect(false);
    } else {
      setIsCorrect(null);
    }
    setTimeout(() => {
      setIsCorrect(null)
    }, 1500);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>color game</h1>
          <p>Can you guess the correct color? Choose from the options below!</p>
        </div>
        <div className="actions">
          <h1 className="score">Score: {score}</h1>
          <button
            className="new-game"
            onClick={() => setScore(0)}
          >
            new game
          </button>
        </div>
        <div className="game-player">
          <div className="target">
            <h1>Target Color: ???</h1>
            <div
              className="target-color"
              style={{ backgroundColor: targetColor }}
            ></div>
          </div>
          <div className="option">
            <h1>Options:</h1>
            <div className="options-grid">
              {options.map((option) => (
                <button
                  className="options"
                  style={{ backgroundColor: option }}
                  onClick={() => {
                    compareColors(option);
                  }}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isCorrect !== null && (
        <div className="backdrop">
          {isCorrect ? (
            <div className="popup correct">✅ Correct</div>
          ) : (
            <div className="popup wrong">❌ Try Again!</div>
          )}
        </div>
      )}
    </>
  );
};

export default App;
