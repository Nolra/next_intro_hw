const getAlbumsForUser = async function(id) {
  const request = await fetch("https://jsonplaceholder.typicode.com/users/" + id + "/albums");
  return await request.json();
}
const getAlbums = async function(id) {
  const request = await fetch("https://jsonplaceholder.typicode.com/albums");
  return await request.json();
}

const getPhotosForAlbum = async function(id) {
  const request = await fetch("https://jsonplaceholder.typicode.com/albums/" + id + "/photos");
  return await request.json();
}

export { getAlbumsForUser, getPhotosForAlbum, getAlbums }