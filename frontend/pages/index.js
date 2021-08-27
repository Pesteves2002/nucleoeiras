import { Button } from "@material-ui/core";
import Head from "next/head";
import Layout from "~/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>NucleOeiras</title>
        <meta name="description" content="NucleOeiras" />
      </Head>

      <Button variant="contained">Test</Button>
    </Layout>
  );
}
