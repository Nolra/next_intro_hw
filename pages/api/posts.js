const getPosts = async function() {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await request.json();
}

const getPost = async function(id) {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  return await request.json();
}

const getPostsForUser = async function(id) {
  const request = await fetch("https://jsonplaceholder.typicode.com/user/" + id + "/posts");
  return await request.json();
}

export { getPosts, getPost, getPostsForUser }