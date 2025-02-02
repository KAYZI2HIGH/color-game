import { useEffect, useState } from "react";
import GamePlayer from "./components/GamePlayer";
import ResultMessage from "./components/ResultMessage";
import Actions from "./components/Actions";

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
      setIsCorrect(null);
    }, 1500);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>color game</h1>
          <p data-testid="gameInstructions">
            Can you guess the correct color? Choose from the options below!
          </p>
        </div>
        <Actions score={score} setScore={setScore}/>
        <GamePlayer options={options} targetColor={targetColor} compareColors={compareColors}/>
      </div>
      {isCorrect !== null && (
       <ResultMessage isCorrect={isCorrect}/>
      )}
    </>
  );
};

export default App;
