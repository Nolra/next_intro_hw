import Post from "@/components/Post";
import { getPostsForUser } from "../../api/posts";
import { getUsers } from "../../api/users";

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
  const posts = await getPostsForUser(context.params.userId);
  const users = await getUsers();
  return { props: { 
    posts, 
    users,
    pageTitle: "Users " + context.params.userId + " posts"
  }, };
}

export default function Posts({ posts, users }) {
  return (
    <>
      <div className="container">
        { posts.map(
          post => {
            const postAutor = users.find(user => user.id === post.userId)
            return <Post post={post} key={post.id} postAutor={postAutor} />
          }
        ) }
      </div>    
    </>
  )
}




