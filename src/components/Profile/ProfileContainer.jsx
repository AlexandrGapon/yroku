import React from 'react'
import Profile from './Profile.jsx'
import { getUserProfileInfo, getUserProfileStatus, updateUserProfileStatus, savePhoto } from '../redux/profileReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

  refreshProfile() {

    let userId = this.props.match.params.userId

    if (!userId) {
      userId = this.props.loggedUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }

    this.props.getUserProfileInfo(userId)
    this.props.getUserProfileStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps) {

    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUserProfileStatus}
        savePhoto={this.props.savePhoto}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loggedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { getUserProfileInfo, getUserProfileStatus, updateUserProfileStatus, savePhoto }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
