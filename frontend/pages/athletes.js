import gql from 'graphql-tag';
import Layout from '~/components/Layout';
import Head from 'next/head';
import AthleteList from '~/components/athletes/AthleteList';
import fetchAPI from '~/lib/graphql';

const Athletes = ({ athletes }) => {
  return (
    <Layout backUrl='/'>
      <Head>
        <title>NucleOeiras</title>
        <meta name='description' content='NucleOeiras' />
      </Head>

      <AthleteList athletes={athletes} />
    </Layout>
  );
};

const ATHLETE_LIST_QUERY = gql`
  query ATHLETE_LIST_QUERY {
    athletes {
      slug
      name
    }
  }
`;

export const getStaticProps = async () => {
  const { athletes } = await fetchAPI(ATHLETE_LIST_QUERY);

  return {
    revalidate: 30,
    props: {
      athletes,
    },
  };
};

export default Athletes;
