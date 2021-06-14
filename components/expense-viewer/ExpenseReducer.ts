export type State = {
	category: "tagId" | "teamId" | null;
	filterBy: Record<string, boolean>;
};

export type Action =
	| {
			type: "tag" | "team";
			payload: string;
	  }
	| {
			type: "category";
			payload: State["category"];
	  };

export const initialState = {
	category: null,
	filterBy: {},
};
function ExpenseReducer(state: State, action: Action): State {
	switch (action.type) {
		case "tag":
		case "team": {
			return {
				...state,
				filterBy: {
					...state.filterBy,
					[action.payload]: !state.filterBy[action.payload],
				},
			};
		}

		case "category":
			return { ...state, category: action.payload };
		default:
			return state;
	}
}

export default ExpenseReducer;
