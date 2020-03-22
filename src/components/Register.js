import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../store/redux/authReducer';

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div>
        <div className="main-header">
          <div className="showcase container">
            <div className="row">
              <div className="col s12 m10 offset-m1 center">
                <div className="card-panel grey-text">
                  <form className="" onSubmit={this.handleSubmit}>
                    <h5 className="">Register</h5>
                    <div className="">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="">
                      <button className="waves-effect waves-light btn-small indigo">
                        Sign Up
                      </button>
                      <div className="">
                        {authError ? <p>{authError}</p> : null}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
    // authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
