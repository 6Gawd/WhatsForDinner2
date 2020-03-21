import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Recipes extends Component {
	render() {
		const { authError, auth } = this.props;
		if (auth.uid) return <Redirect to="/" />;

		return (
			<div>
				<h1>RECIPES</h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
