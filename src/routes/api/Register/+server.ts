
import type { RequestHandler } from './$types';
import { db } from '$lib/server/db';
import { utenti } from '$lib/server/db/schema';

async function requestUser() {
    let result = await db.select().from(utenti)
    return result
}

async function addUser(name:string, email:string,passw:string) {
    let result = await db.insert(utenti).values({
        name,
        email,
        passw
    })
    return result
}

export const GET: RequestHandler = async ({ url }) => {

    let users = await requestUser()

    return new Response(JSON.stringify(users));
};

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email, name, passw } = await request.json();

    if (!email || !name || !passw) {
      return new Response(
        JSON.stringify({ message: "missing content" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = await addUser(name, email, passw);

    return new Response(
      JSON.stringify(result),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('POST /UsersReal error:', error);
    return new Response(
      JSON.stringify({ message: 'Internal Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
