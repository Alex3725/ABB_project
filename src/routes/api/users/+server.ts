import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';

async function requestUser() {
    let result = await db.select().from(users)
    return result
}

async function addUser(name:string, email:string) {
    let result = await db.insert(users).values({
        name,
        email
    })
    return result
}

export const GET: RequestHandler = async ({ url }) => {

    let users = await requestUser()

	return new Response(JSON.stringify(users));
};

export const POST: RequestHandler = async ({ url, request }) => {

    let {email, name} = await request.json()

    console.log(name)
    if(!email && !name) {
        return new Response(JSON.stringify("missing content"),
            {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    let users = await addUser(name, email)

	return new Response(JSON.stringify(users));
};