import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

function getDateFilter(start: string | string[], end: string | string[]) {
	const _start = Array.isArray(start) ? start[0] : start;
	const _end = Array.isArray(end) ? end[0] : end;

	if (_start && _end) {
		return {
			gte: _start,
			lte: _end,
		};
	}

	if (_start || _end) {
		throw new Error("Both start and end required");
	}
}
// GET /api/transactions

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { tag = "", team = "", start, end } = req.query;

	try {
		const dateQuery = getDateFilter(start, end);
		const transactions = await prisma.transactions.findMany({
			where: {
				AND: [
					{
						doneAt: dateQuery,
					},
					{
						tagId: tag
							? {
									equals: Number(tag),
							  }
							: undefined,
					},
					{
						teamId: team
							? {
									equals: Number(team),
							  }
							: undefined,
					},
				],
			},
			select: {
				id: true,
				doneAt: true,
				tagId: true,
				amountInCents: true,
				teamId: true,
			},
		});
		return res.json(transactions);
	} catch (e) {
		console.error(e);
	}
}
