import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addIngredient,
  deleteIngredient
} from '../store/redux/ingredientsReducer';

export class List extends Component {
  render() {
    //====================MIKE's REFACTOR======================//
    const { ingredients } = this.props;
    const ingredientList = ingredients.length ? (
      ingredients.map(ingredient => {
        return (
          <div key={ingredient.name}>
            <p>{ingredient.name}</p>
            <div className="col s12 l6 right">
              <button
                className="btn-floating waves-effect waves-light red right"
                type="button"
                name="action"
                onClick={() => this.props.deleteIngredient(ingredient)}
              >
                <i className="material-icons">x</i>
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p>No Ingredients Yet</p>
    );
    //====================END MIKE's REFACTOR===============//

    //====================YAN'S ORIGINAL CODE===============//
    /* <ul>
          {this.props.ingredients.map(ingredient => (
            <li key={ingredient.name}>{ingredient.name}</li>
          ))}
        </ul> */
    //===============END YAN'S CODE=======================//

    return (
      // INGREDIENT LIST FORM
      <div>
        <h1>Your Shopping List</h1>
        {ingredientList}

        {/* INPUT ITEM FORM */}
        <div className="main-header">
          <div className="showcase container">
            <div className="row">
              <div className="col s12 m10 offset-m1 center">
                <label htmlFor="ingredient">Add Ingredient</label>
                <input
                  type="text"
                  name="ingredient"
                  onChange={this.handleChange}
                />
              </div>
              <button
                className="btn waves-effect waves-light indigo center"
                type="button"
                name="action"
              >
                Add Ingredient
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
});

const mapDispatchToProps = dispatch => ({
  addIngredient: (ingredient, userId) =>
    dispatch(addIngredient(ingredient, userId)),
  deleteIngredient: (ingredient, userId) =>
    dispatch(deleteIngredient(ingredient, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
