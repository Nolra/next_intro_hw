import Post from "@/components/Post";
import Head from 'next/head';
import { getPosts } from "../api/posts";
import { getUsers } from "../api/users";

export async function getStaticProps() {
  const posts = await getPosts();
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




