// src/lib/api/login.ts
export async function loginUtente(email: string, passw: string) {
  const res = await fetch('/api/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, passw }) // 🔐 invii i dati
  });

  const data = await res.json();

  console.log(res);
  

  if (!res.ok) {
    throw new Error(data.error || 'Errore durante il login');
  }

  return data;
}
