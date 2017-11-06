import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board'; // Imported the Board component
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Board />, // Rendered the Board component
  document.getElementById('root')
);
registerServiceWorker();