import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  console.log("^.^");
  return (
    <div>
      <Layout />
    </div>
  );
};

export default Home;
