import React, { Component } from 'react';
import { connect } from 'react-redux';

export class List extends Component {
	render() {
		return (
			<div>
				<h1>LIST</h1>
				<ul>
					{/* {this.props.ingredients.map((ingredient) => {
						<li>{ingredient.name}</li>;
					})} */}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	ingredients: state.ingredients
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
