import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addedIngredient, deletedIngredient } from '../store/redux/ingredientsReducer';
import { Redirect } from 'react-router-dom';
import OutputSpeech from './Speech/OutputSpeech';
import InputSpeech from './Speech/InputSpeech';

export class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			userId: props.auth.uid
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// this.playback(this.state.name);
		this.props.addIngredient(this.state);
		this.setState({ name: '' });
	};

	startedListening = (name) => {
		this.setState({ name: name });
	};

	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/login" />;
		console.log('LIST PROPS', this.props);
		const { ingredients } = this.props;
		const ingredientList = ingredients.length ? (
			ingredients.map((ingredient) => {
				return (
					<div key={ingredient.id}>
						<p>{ingredient.name}</p>
						<button
							className="btn-small waves-effect waves-light red right"
							type="button"
							name="action"
							onClick={() => this.props.deleteIngredient(ingredient.id)}
						>
							<i className="material-icons">x</i>
						</button>
					</div>
				);
			})
		) : (
			<p>No Ingredients Yet</p>
		);
		return (
			// INGREDIENT LIST FORM
			<div>
				<h1 className="center-align">Your Shopping List</h1>
				{ingredientList}

				{/* INPUT ITEM FORM */}
				<form onSubmit={this.handleSubmit}>
					<div className="main-header">
						<div className="showcase container">
							<div className="row">
								<div className="col s12 m10 offset-m1 center">
									<label htmlFor="ingredient">Add Ingredient</label>
									<input value={this.state.name} name="name" onChange={this.handleChange} />
								</div>
								<button
									className="btn waves-effect waves-light indigo center"
									type="submit"
									name="action"
								>
									Add Ingredient
								</button>
								<OutputSpeech content={this.state.name} onClick={() => this.handleSubmit} />
							</div>
						</div>
					</div>
				</form>
				<InputSpeech startedListening={this.startedListening} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	ingredients: state.ingredients,
	auth: state.firebase.auth,
	test: state
});

const mapDispatchToProps = (dispatch) => ({
	addIngredient: (ingredient) => dispatch(addedIngredient(ingredient)),
	deleteIngredient: (id) => dispatch(deletedIngredient(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
