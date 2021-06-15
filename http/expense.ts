const baseUrl = `${process.env.APP_PROTOCOL}://${process.env.VERCEL_URL}`;
export const fetchTags = () => {
	return fetch(`${baseUrl}/api/tags`, {
		headers: { "Content-Type": "application/json" },
	});
};

export const fetchTeams = () => {
	return fetch(`${baseUrl}/api/teams`, {
		headers: { "Content-Type": "application/json" },
	});
};

export const fetchTransactions = () => {
	return fetch(`${baseUrl}/api/transactions`, {
		headers: { "Content-Type": "application/json" },
	});
};
