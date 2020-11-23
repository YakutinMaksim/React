import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path="/profile" render={() => < Profile dialogsData={props.dialogsData} />} />
          <Route path="/dialogs" render={() => < Dialogs messageData={props.messageData} dialogName={props.dialogName} />} />
          <Route path="/news" render={() => < News />} />
          <Route path="/music" render={() => < Music />} />
          <Route path="/settings" render={() => < Settings />} />
        </div>
      </div>
    </BrowserRouter>);

}

export default App;
