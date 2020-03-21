const GOT_INGREDIENTS = 'GOT_INGREDIENTS';
const ADDED_INGREDIENT = 'ADDED_INGREDIENT';

const addedIngredient = (ingredient) => {
	return {
		type: ADDED_INGREDIENT,
		ingredient
	};
};

const gotIngredients = (ingredients) => {
	return {
		type: GOT_INGREDIENTS,
		ingredients
	};
};

export const addIngredient = (ingredient, userId) => {
	return async (dispatch, getState, { getFirestore }) => {
		try {
			const firestore = await getFirestore();
			const newIngredient = await firestore.collection('ingredients').doc(userId).set({
				name: ingredient.name
			});
			dispatch(gotIngredients(newIngredient));
		} catch (error) {
			console.log('No Ingredients', error);
		}
	};
};

export const getIngredients = (userId) => {
	return async (dispatch, getState, { getFirebase, getFirestore }) => {
		try {
			// const firebase = getFirebase();
			const firestore = getFirestore();
			const ingredients = [];
			await firestore.collection('ingredients').where('userId', '==', userId).get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					ingredients.push(doc.data());
				});
			});
			dispatch(gotIngredients(ingredients));
		} catch (error) {
			console.log('No Ingredients', error);
		}
	};
};

const ingredientsReducer = (state = [], action) => {
	switch (action.type) {
		case GOT_INGREDIENTS:
			return action.ingredients;
		case ADDED_INGREDIENT:
			return [ ...state, action.ingredient ];
		default:
			return state;
	}
};

export default ingredientsReducer;
