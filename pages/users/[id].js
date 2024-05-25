import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer>
      <div>
        <h1>User with id {query.id}</h1>
        <h1>User with name {query.name}</h1>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();
  // Pass data to the page via props
  return { props: { user } };
}
