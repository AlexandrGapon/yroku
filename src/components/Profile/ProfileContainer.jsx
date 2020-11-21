import React from 'react';
import Profile from './Profile.jsx';
import { getUserProfileTC, getUserStatus, updateProfileStatus } from '../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.loggedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }

    this.props.getUserProfileTC(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} 
      updateProfileStatus = {this.props.updateProfileStatus} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loggedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
  });

export default compose(
  connect(mapStateToProps, { getUserProfileTC, getUserStatus, updateProfileStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
