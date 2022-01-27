import React, { useState } from 'react';
import MemoryGame from './components/MemoryGame';
import Scoreboard from './components/Scoreboard';
import './App.css';

const App = (props) => {
  const [memoryScore, setMemoryScore] = useState(0);
  const [memoryHighscore, setmemoryHighscore] = useState(0);

  const memoryArray = [
    {
      id: 'Temperance',
      src: require('./images/temperance.jpg'),
    },
    {
      id: 'Chariot',
      src: require('./images/chariot.jpg'),
    },
    {
      id: 'Empress',
      src: require('./images/empress.jpg'),
    },
    {
      id: 'Hangedman',
      src: require('./images/hangedman.jpg'),
    },
    {
      id: 'Hermit',
      src: require('./images/hermit.jpg'),
    },
    {
      id: 'Hierophant',
      src: require('./images/hierophant.jpg'),
    },
    {
      id: 'fool',
      src: require('./images/fool.jpg'),
    },
    {
      id: 'Death',
      src: require('./images/death.jpg'),
    },
    {
      id: 'World',
      src: require('./images/world.jpg'),
    },
    {
      id: 'Tower',
      src: require('./images/tower.jpg'),
    },
    {
      id: 'Moon',
      src: require('./images/moon.jpg'),
    },
    {
      id: 'Lovers',
      src: require('./images/lovers.jpg'),
    },
  ];

  const memoryScoreHandler = () => {
    setMemoryScore(memoryScore + 1);
  };

  const memoryHighscoreHandler = () => {
    if (memoryScore > memoryHighscore) {
      setmemoryHighscore(memoryScore);
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
