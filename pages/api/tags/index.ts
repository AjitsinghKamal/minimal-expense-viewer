import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET /api/tags

export default async function handle(_: NextApiRequest, res: NextApiResponse) {
	const tags = await prisma.tags.findMany();
	res.json(tags);
}
