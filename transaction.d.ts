type Tag = {
	id: number;
	title: string;
	legend: string;
};

type Teams = {
	id: number;
	title: string;
	legend: string;
};
type Transaction = {
	id: number;
	doneAt: string;
	details?: string;
	amountInCents: string;
	currency: string;
	tag: Tag;
	team: Teams;
};
