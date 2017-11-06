import React from 'react';

import GuessBox from './guessBox';
import Header from './header';

import './style/game.css';

export default function Game(props) {
    return (
       <div>
           <Header />
         <section className="game">
            <GuessBox />
         </section>
     </div>
    );
};

Game.defaultProps = {
    title: 'HOT or COLD'
};

