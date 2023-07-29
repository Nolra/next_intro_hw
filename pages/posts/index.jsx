import Post from "@/components/Post";
import { getPosts } from "../api/posts";
import { getUsers } from "../api/users";

export async function getStaticProps() {
  const posts = await getPosts();
  const users = await getUsers();
  return { props: { 
    posts, 
    users,
    pageTitle: "Post page"
  }, };
}

export default function Posts({ posts, users }) {
  return (
    <>
      { posts.map(
        post => {
          const postAutor = users.find(user => user.id === post.userId)
          return <Post post={post} key={post.id} postAutor={postAutor} />
        }
      ) }
    </>    
  )
}




