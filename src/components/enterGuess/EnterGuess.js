import React from 'react';

import GuessList from '../guessList/GuessList';
import Count from '../count/Count';

import './EnterGuess.css';

export default function EnterGuess(props) {
  return (
    <form>
      <input
        type="text"
        name="userGuess"
        id="userGuess"
        className="text"
        maxLength="3"
        autoComplete="off"
        placeholder="Enter your Guess"
        required
      />
      <input
        type="submit"
        id="guessButton"
        className="button"
        name="submit"
        value="Guess"
      />
      <Count />
      <GuessList />
    </form>
  );
}

EnterGuess.defaultProps = {
  placeholder: 'Enter your Guess'
};
