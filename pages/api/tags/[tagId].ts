import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET /api/tags/123

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { tagId } = req.query;
	const tag = await prisma.tags.findUnique({
		where: {
			id: Array.isArray(tagId) ? Number(tagId[0]) : Number(tagId),
		},
	});
	res.json(tag);
}
