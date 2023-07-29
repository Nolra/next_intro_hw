import User from "@/components/User";
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
  return { props: { 
    user,
    pageTitle: "User " + context.params.userId
   }, };
}



export default function UserPage({ user }) {
  return (
    <div className="container">
      <User user={user} key={user.id} />
    </div>
  )
}