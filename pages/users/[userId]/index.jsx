import User from "@/components/User";
import Head from 'next/head';
import { getUser, getUsers } from "../../api/users";

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
  const user = await getUser(context.params.userId);
  return { props: { user }, };
}



export default function UserPage({ user }) {
  return (
    <>
      <Head>
        <title>User page</title>
      </Head>
      <div className="container">
        <User user={user} key={user.id} />
      </div>    
    </>
  )
}