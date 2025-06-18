import type { NextApiRequest, NextApiResponse } from 'next'
import {objectOutputType, z, ZodTypeAny} from "zod";

const schema = z.object({
    // ...
})
async function createItem(data: objectOutputType<{}, ZodTypeAny, "strip">) {
    console.log("Creating item");
    console.log(data)
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = req.body
    const id = await createItem(schema.parse(data))
    res.status(200).json({ id })
}