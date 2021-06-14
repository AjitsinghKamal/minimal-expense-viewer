/* eslint-disable */

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
	tagId: number;
	amountInCents: string;
	teamId: number;
	currency: string;
};
