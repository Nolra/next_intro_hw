import Post from "@/components/Post";
import { getPost, getPosts } from "../api/posts";
import { getUsers } from "../api/users";

export async function getStaticPaths() {
  const post = await getPosts();
  const paths = post.map(post => ({ 
    'params': { 
      'postId': String(post.id)
    } 
  }));
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const post = await getPost(context.params.postId);
  const users = await getUsers();
  return { props: { 
    post, 
    users, 
    pageTitle: "Post page " + context.params.postId 
  }, };
}

export default function PostPage({ post, users }) {
  const postAutor = users.find(user => user.id === post.userId)
  return (
    <Post post={post} postAutor={postAutor} key={post.id} />
  )
}