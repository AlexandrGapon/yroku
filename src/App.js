import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Sidebar/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';

import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { initializeApp } from './components/redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer') );

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }



  render() {

    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
              <Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <Login />} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/settings' component={Settings} />
            </div>
          </div>
        </BrowserRouter>);
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  connect(mapStateToProps, { initializeApp })
)(App);