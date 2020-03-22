import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/redux/authReducer';

export class Profile extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        <h1>Profile Page</h1>

        <button
          className="waves-effect waves-light btn-small red"
          onClick={this.props.signOut}
        >
          Log Out
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
