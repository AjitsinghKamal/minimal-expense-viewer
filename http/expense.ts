export const fetchTags = () => {
	return fetch(`${process.env.APP_PATH}/api/tags`, {
		headers: { "Content-Type": "application/json" },
	});
};

export const fetchTeams = () => {
	return fetch(`${process.env.APP_PATH}/api/teams`, {
		headers: { "Content-Type": "application/json" },
	});
};

export const fetchTransactions = () => {
	return fetch(`${process.env.APP_PATH}/api/transactions`, {
		headers: { "Content-Type": "application/json" },
	});
};
