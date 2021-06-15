import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET /api/teams/123

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { teamId } = req.query;
	const team = await prisma.tags.findUnique({
		where: {
			id: Array.isArray(teamId) ? Number(teamId[0]) : Number(teamId),
		},
	});
	res.json(team);
}
