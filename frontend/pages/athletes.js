import Layout from '~/components/Layout';
import Head from 'next/head';

const Athletes = () => {
  return (
    <Layout backUrl='/'>
      <Head>
        <title>NucleOeiras</title>
        <meta name='description' content='NucleOeiras' />
      </Head>
    </Layout>
  );
};

export default Athletes;
