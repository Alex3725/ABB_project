export async function load({ fetch }) {
  const res = await fetch('/api/users');
  const users = await res.json();
  console.log(users)
  
//   const res1 = await fetch('/api/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//             name: 'Mario Rossi',
//             email: 'mario@example.com'
//         }),
//     });

//     if (!res1.ok) {
//         console.error('Errore:', await res1.text());
//     } else {
//         const data = await res1.json();
//         console.log('Risposta:', data);
//     }
  
  return { users };


}
