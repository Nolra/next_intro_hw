import User from "@/components/User";
import Head from 'next/head';
import { getUsers } from "../api/users";

export async function getStaticProps() {
  const users = await getUsers();
  return { props: { users }, };
}

export default function Users({ users }) {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>

      <div className="container">
        { users.map(user => <User user={user} key={user.id} />) }
      </div>    
    </>
  )
}




