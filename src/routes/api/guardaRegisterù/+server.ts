import { db } from '$lib/server/db';
import { user } from '$lib/server/db/schema';

export async function GET() {
  const allMessages = await db.select().from(user);

  return new Response(JSON.stringify(allMessages), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
