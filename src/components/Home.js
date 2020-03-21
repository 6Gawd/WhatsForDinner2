import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../store/redux/authReducer';

class Home extends Component {
	render() {
		console.log('props in home', this.props);
		return (
			<div>
				<h1>HOME PAGE</h1>

				<button onClick={this.props.signOut}>Log Out</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.firebase.auth,
	ingredients: state.ingredients
});

const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
