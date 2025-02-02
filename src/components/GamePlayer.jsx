import GameOptions from "./GameOptions";
import TargetColorDisplay from "./TargetColorDisplay";

const GamePlayer = ({targetColor, options, compareColors}) => {
  return (
    <div className="game-player">
      <TargetColorDisplay targetColor={targetColor}/>
      <GameOptions options={options} compareColors={compareColors}/>
    </div>
  );
}

export default GamePlayer