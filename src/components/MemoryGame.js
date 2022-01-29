import React, { useState } from 'react';
import MemoryCard from './MemoryCard';
import styles from './MemoryGame.module.css';

const MemoryGame = (props) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const cardShuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };
  const memoryCards = cardShuffle(props.cards);

  const selectedCardHandler = (card) => {
    if (!selectedCards.includes(card)) {
      props.onSelectCard();
      setSelectedCards((prevCards) => {
        return [...prevCards, card];
      });
    } else {
      props.onGameOver();
      setSelectedCards([]);
    }
  };

  return (
    <div className={styles.cardfield}>
      <div className={styles.container}>
        <MemoryCard
          memoryCards={memoryCards}
          selectedCardHandler={selectedCardHandler}
        />
      </div>
    </div>
  );
};

export default MemoryGame;
