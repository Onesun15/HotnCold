import React from 'react';

import EnterGuess from './enterGuess';

import './style/guessBox.css';

export default function GuessBox(props) {
    return (
        <div className="guess-box">
            <h2>{props.title}</h2>
            <EnterGuess />
        </div>
    );
};

GuessBox.defaultProps = {
    title: 'Make your Guess!'
};