import React from 'react';
import styles from "./Scoreboard.module.css"

const Scoreboard = (props) => {
  return (
    <div className={styles.board}>
      <h1>Memory Game</h1>
      <p>Don't click the same card twice</p>
      <h3>Score: {props.score}</h3>
      <h3>High Score: {props.highscore}</h3>
    </div>
  );
};

export default Scoreboard;
