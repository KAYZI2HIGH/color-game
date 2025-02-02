const ResultMessage = ({isCorrect}) => {
  return (
    <div
      className="backdrop"
      data-testid="gameStatus"
    >
      {isCorrect ? (
        <div className="popup correct">✅ Correct</div>
      ) : (
        <div className="popup wrong">❌ Try Again!</div>
      )}
    </div>
  );
}

export default ResultMessage