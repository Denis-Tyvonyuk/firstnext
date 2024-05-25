import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"next js react" + keywords}></meta>
        <title>Main Page</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text={"main"} />
        <A href={"/users"} text={"users"} />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: orange;
          padding: 15px;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
