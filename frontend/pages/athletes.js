import Layout from '~/components/Layout';
import Head from 'next/head';
import AthleteList from '~/components/athletes/AthleteList';

const Athletes = () => {
  return (
    <Layout backUrl='/'>
      <Head>
        <title>NucleOeiras</title>
        <meta name='description' content='NucleOeiras' />
      </Head>

      <AthleteList athletes={[]} />
    </Layout>
  );
};

export default Athletes;
