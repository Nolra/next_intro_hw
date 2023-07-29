import User from "@/components/User";
import { getUsers } from "../api/users";

export async function getStaticProps() {
  const users = await getUsers();
  return { props: { 
    users,
    pageTitle: "Users" 
  }, };
}

export default function Users({ users }) {
  return (
    <>
      <div className="container">
        { users.map(user => <User user={user} key={user.id} />) }
      </div>    
    </>
  )
}




