const GameOptions = ({options, compareColors}) => {
  return (
    <div className="option">
      <h1>Options:</h1>
      <div className="options-grid">
        {options.map((option, index) => (
          <button
            key={index}
            className="options"
            style={{ backgroundColor: option }}
            onClick={() => {
              compareColors(option);
            }}
            data-testid="colorOption"
          ></button>
        ))}
      </div>
    </div>
  );
}

export default GameOptions