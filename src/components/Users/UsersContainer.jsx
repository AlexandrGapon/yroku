import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { followTC, unfollowTC, getUsersTC } from '../redux/usersReducer';

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageSelected = (pageNumber) => {

        this.props.getUsersTC(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageSelected={this.onPageSelected}
                follow={this.props.followTC}
                unfollow={this.props.unfollowTC}
                users={this.props.users}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps,
    { followTC, unfollowTC, getUsersTC })(UsersContainer);