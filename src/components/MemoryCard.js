import React, { useEffect, useState } from 'react';
import styles from './MemoryCard.module.css';

const MemoryCard = (props) => {
  const [cardClass, setCardClass] = useState(`${styles.cards} ${styles.intro}`);

  useEffect(() => {
    setTimeout(() => {
      setCardClass(styles.cards);
    }, 300);
  }, []);

  return (
    <React.Fragment>
      {props.memoryCards.map((item) => {
        return (
          <button
            className={cardClass}
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
