export const fetchTags = () => {
	return fetch(`${process.env.VERCEL_URL}/api/tags`, {
		headers: { "Content-Type": "application/json" },
	});
};

export const fetchTeams = () => {
	return fetch(`${process.env.VERCEL_URL}/api/teams`, {
		headers: { "Content-Type": "application/json" },
	});
};

export const fetchTransactions = () => {
	return fetch(`${process.env.VERCEL_URL}/api/transactions`, {
		headers: { "Content-Type": "application/json" },
	});
};
