import Album from "@/components/Album";
import { getAlbumsForUser } from "../../../api/albums";
import { getUsers } from "../../../api/users";

export async function getStaticPaths() {
  const users = await getUsers();
  const paths = users.map(user => ({ 
    'params': { 
      'userId': String(user.id)
    } 
  }));
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const albums = await getAlbumsForUser(context.params.userId);
  const users = await getUsers();
  return { props: { 
    albums, 
    users,
    pageTitle: "Users " + context.params.userId + " albums"
  }, };
}

export default function AlbumsPage({ albums, users }) {
  return (
    <>
      { albums.map(
        album => {
          const albumAutor = users.find(user => user.id === album.userId)
          return <Album album={album} key={album.id} albumAutor={albumAutor} />
        }
      ) }  
    </>
  )
}




