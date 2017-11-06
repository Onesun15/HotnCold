import React from 'react';


import './style/guessList.css';

export default function GuessList(props) {
   // console.log(props);
    return (
        <ul id="guessList" className="guessBox clearfix">
        <li>
               {props.text}
        </li>
        </ul>
    )
}

GuessList.defaultProps = {
    text: 'ListAllGuesses'
};