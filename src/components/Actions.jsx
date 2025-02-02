const Actions = ({score, setScore}) => {
  return (
    <div className="actions">
      <h1
        className="score"
        data-testid="score"
      >
        Score: {score}
      </h1>
      <button
        className="new-game"
        onClick={() => setScore(0)}
        data-testid="newGameButton"
      >
        new game
      </button>
    </div>
  );
}

export default Actions