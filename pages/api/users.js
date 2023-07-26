const getUsers = async function() {
  const request = await fetch("https://jsonplaceholder.typicode.com/users");
  return await request.json();
}

const getUser = async function(id) {
  const request = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  return await request.json();
}

export { getUsers, getUser }