import React from 'react';

import GuessBox from '../guessBox/GuessBox';
import Header from '../header/Header';

import './Game.css';

export default function Game() {
  return (
    <div>
      <Header />
      <section className="game">
        <GuessBox />
      </section>
    </div>
  );
}
