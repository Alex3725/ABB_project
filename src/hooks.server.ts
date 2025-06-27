import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {//passa richiesta
	if (event.cookies.get('value')) {
		return new Response('custom response');
	}

	const response = await resolve(event);
	return response;

	
};





// per saiber sicuirity hash 256 in base ad un testo ti trasforma quello in una cosa non convertibile