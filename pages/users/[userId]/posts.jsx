import Post from "@/components/Post";
import Head from 'next/head';
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
  return { props: { posts, users }, };
}

export default function Posts({ posts, users }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

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




