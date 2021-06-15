import { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";

// GET /api/teams

export default async function handle(_: NextApiRequest, res: NextApiResponse) {
	const teams = await prisma.teams.findMany();
	res.json(teams);
}
