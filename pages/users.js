import Link from "next/link";
import { useState } from "react";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users page"}>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link legacyBehavior href={`/users/${user.id}`}>
                <a>{user.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return { props: { users } };
}
