export async function load({ fetch }:any) {
  const res = await fetch('/api/UsersReal');
  const users = await res.json();
  console.log(users)
  return { users };
}
