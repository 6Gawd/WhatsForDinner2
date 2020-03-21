import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export class Profile extends Component {
	render() {
		const { authError, auth } = this.props;
		if (auth.uid) return <Redirect to="/" />;

		return (
			<div>
				<h1>Profile</h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.firebase.auth
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
