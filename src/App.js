import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Sidebar/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile state={props.state.profilePage}
            dispatch={props.dispatch} />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>);
}

export default App;