import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
  { id: 1, message: 'hi world', likesCount: '102' },
  { id: 2, message: 'I am Maksim', likesCount: '23' }
];

let messageData = [
  { id: 1, message: 'hello,Hi' },
  { id: 2, message: 'Hi Maksim' },
  { id: 3, message: 'OY' },
];

let dialogName = [
  { name: 'Dima', id: 3 },
  { name: 'Sveta', id: 4 },
  { name: 'Olya', id: 5 }
];

ReactDOM.render(
  <React.StrictMode>
    <App
      dialogsData={dialogsData}
      messageData={messageData}
      dialogName={dialogName} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


