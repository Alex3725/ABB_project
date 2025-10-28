export async function registraUtente(name: string, email: string, passw: string) {
  const res = await fetch('/api/Register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, passw }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error || 'Errore nella registrazione');
  }

  return await res.json();
}


