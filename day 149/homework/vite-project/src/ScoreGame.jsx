import React, { useState } from 'react';

function ScoreGame() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>ქულა: {score}</h2>
      <button onClick={() => setScore(score + 1)}>დამატება</button><br></br>
      <button onClick={() => setScore(0)}>ნულზე დაყენება</button>
    </div>
  );
}

export default ScoreGame;
