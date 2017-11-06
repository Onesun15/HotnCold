import React from 'react';

import GuessList from './guessList';
import Count from './count';

import './style/enterGuess.css';

export default function EnterGuess(props) {
    return (
             <form>
				<input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder={props.placeholder} required/>
      			<input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
                  <Count />
                  <GuessList />
			</form>
           
    );
};

EnterGuess.defaultProps = {
    placeholder: 'Enter your Guess'
};