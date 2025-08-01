import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { utenti } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request }) => {
  // Estrai email e password dal corpo della richiesta JSON
  const { email, passw } = await request.json();

  // Controllo: email e passw sono obbligatori
  if (!email || !passw) {
    return new Response(JSON.stringify({ error: 'Dati mancanti' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Query al database per cercare un utente con email e password
  const result = await db
    .select()
    .from(utenti)
    .where(eq(utenti.email, email));

  const user = result[0];

  // Controlla se utente esiste e se la password corrisponde
  if (!user || user.passw !== passw) {
    return new Response(JSON.stringify({ error: 'Credenziali non valide' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Se è tutto corretto, ritorna i dati dell'utente (senza password!)
  return new Response(JSON.stringify({
    message: 'Login riuscito',
    user: {
      id: user.user_id,
      name: user.name,
      email: user.email,
      autorizzato: user.autorizzato
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
