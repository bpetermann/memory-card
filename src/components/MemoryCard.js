import React from 'react';
import styles from './MemoryCard.module.css';

const MemoryCard = (props) => {
  return (
    <React.Fragment>
      {props.memoryCards.map((item) => {
        return (
          <button
            className={styles.cards}
            key={item.id}
            onClick={() => props.selectedCardHandler(item.id)}
          >
            <img src={item.src} alt={item.title}></img>
          </button>
        );
      })}
    </React.Fragment>
  );
};

export default MemoryCard;
