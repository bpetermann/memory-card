import React, { useState } from 'react';
import MemoryGame from './components/MemoryGame';
import Scoreboard from './components/Scoreboard';
import memoryArray from './components/MemoryArray';

const App = () => {
  const [memoryScore, setMemoryScore] = useState(0);
  const [memoryHighscore, setMemoryHighscore] = useState(() => {
    const initialState =
      localStorage.getItem('highscore') !== null
        ? localStorage.getItem('highscore')
        : 0;
    return initialState;
  });

  const memoryScoreHandler = () => {
    setMemoryScore(memoryScore + 1);
  };

  const memoryHighscoreHandler = () => {
    if (memoryScore > memoryHighscore) {
      setMemoryHighscore(memoryScore);
      const score = +memoryScore;
      localStorage.setItem('highscore', score);
    }
    setMemoryScore(0);
  };

  return (
    <div>
      <Scoreboard score={memoryScore} highscore={memoryHighscore} />
      <MemoryGame
        cards={memoryArray}
        onSelectCard={memoryScoreHandler}
        onGameOver={memoryHighscoreHandler}
      />
    </div>
  );
};

export default App;
