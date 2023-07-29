import AlbumPhotos from "@/components/AlbumPhotos";
import { getUser } from "../../../api/users";
import { getAlbums, getPhotosForAlbum } from "../../../api/albums";

export async function getStaticPaths() {
  const albums = await getAlbums();
  
  const paths = albums.map(album => {
    return {
      'params': { 
        'userId': String(album.userId),
        'albumId': String(album.id)
      }
    } 
  });

  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const user = await getUser(context.params.userId);
  const album = context.params.albumId;
  const photos = await getPhotosForAlbum(context.params.albumId);
  return { props: { 
    user,
    album,
    photos,
    pageTitle: "Users " + context.params.userId + " photos " + " from album " + context.params.albumId
   }, };
}

export default function AlbumPage({ user, album, photos }) {
  return (
    <AlbumPhotos user={user} album={album} photos={photos} />
  )
}