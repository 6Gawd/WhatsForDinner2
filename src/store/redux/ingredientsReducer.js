import { auth, db } from '../../fbConfig/fbConfig';

const GET_INGREDIENTS = 'GET_INGREDIENTS';
const ADD_INGREDIENT = 'ADD_INGREDIENT';
const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

const addIngredient = ingredient => {
  return {
    type: ADD_INGREDIENT,
    ingredient
  };
};

const getIngredients = ingredients => {
  return {
    type: GET_INGREDIENTS,
    ingredients
  };
};

const deleteIngredient = id => {
  return {
    type: DELETE_INGREDIENT,
    id
  };
};

export const addedIngredient = ingredient => {
  return async dispatch => {
    try {
      await db.collection('ingredients').add(ingredient);
      dispatch(addIngredient(ingredient));
    } catch (error) {
      console.log('No Ingredients', error);
    }
  };
};

export const gotIngredients = userId => {
  return async dispatch => {
    try {
      const ingredients = [];
      await db
        .collection('ingredients')
        .where('userId', '==', userId)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            const item = doc.data();
            item.id = doc.id;
            ingredients.push(item);
          });
        });
      dispatch(getIngredients(ingredients));
    } catch (error) {
      console.error('No Ingredients', error);
    }
  };
};

export const deletedIngredient = id => {
  return async dispatch => {
    try {
      console.log('DELETE INGREDIENT THUNK');
      await db
        .collection('ingredients')
        .doc(id)
        .delete();
      dispatch(deleteIngredient(id));
    } catch (error) {
      console.error('Error deleting ingredient', error);
    }
  };
};

const ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.ingredients;
    case ADD_INGREDIENT:
      return [...state, action.ingredient];
    case DELETE_INGREDIENT:
      return state.filter(ingredient => ingredient.id !== action.id);
    default:
      return state;
  }
};

export default ingredientsReducer;
