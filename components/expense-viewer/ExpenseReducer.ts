export type State = {
	category?: "tag" | "team";
	filterBy: Record<string, boolean>;
};

export type Action =
	| {
			type: "filter";
			payload: number;
	  }
	| {
			type: "category";
			payload: State["category"];
			default: number;
	  };

export const initialState = {
	category: undefined,
	filterBy: {}, // Keeping this map to support stacked charts later
};
function ExpenseReducer(state: State, action: Action): State {
	switch (action.type) {
		case "filter":
			return {
				...state,
				filterBy: {
					[action.payload]: !state.filterBy[action.payload],
				},
			};

		case "category":
			return {
				...state,
				category:
					state.category === action.payload
						? undefined
						: action.payload,
				filterBy: {
					[action.default]: true,
				},
			};
		default:
			return state;
	}
}

export default ExpenseReducer;
