import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import { follow, unfollow, getUsersTC } from '../redux/usersReducer'

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageSelected = (pageNumber) => {

        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader />
                    : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageSelected={this.onPageSelected}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                />
            </>)
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
})

export default connect(mapStateToProps, { follow, unfollow, getUsersTC })(UsersContainer)
