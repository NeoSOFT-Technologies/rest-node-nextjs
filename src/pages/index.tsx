import type { NextPage } from "next";
import Link from "next/link";
import { useAppSelector } from "../store/hooks";

const Home: NextPage = () => {
  const userData = useAppSelector((root) => root.login);

  return (
    <>
      <h1>Welcome to nextjs</h1>
      {userData.data ? (
        <Link href="/profile">Profile Page</Link>
      ) : (
        <Link href="/login">Login Page</Link>
      )}
    </>
  );
};

export default Home;
