export const initialState = {
	basket: []
};

//  Selector
//  Will iterate through basket and tally total
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);

	switch(action.type) {
		case 'ADD_TO_BASKET': 
			return {
				...state,
				// Return the basket with the state it originally had + the new item added
				basket: [...state.basket, action.item]
			};
		default:
			return state
	}
};

export default reducer;