import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';

async function requestUser() {
    let result = await db.select().from(users)
    return result
}

export const GET: RequestHandler = async ({ url }) => {

    let users = await requestUser()

    return new Response(JSON.stringify(users));
};