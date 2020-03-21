import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../store/redux/authReducer';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.signIn(this.state);
	};

	render() {
		const { authError, auth } = this.props;
		if (auth.uid) return <Redirect to="/" />;

		return (
			<div className="container">
				<form className="" onSubmit={this.handleSubmit}>
					<h5 className="">Sign In</h5>
					<div className="">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" onChange={this.handleChange} />
					</div>
					<div className="">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" onChange={this.handleChange} />
					</div>
					<div className="">
						<button className="">Login</button>
						<div className="">{authError ? <p>{authError}</p> : null}</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (credentials) => dispatch(signIn(credentials))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
