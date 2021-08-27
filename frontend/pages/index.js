import gql from 'graphql-tag';
import Head from 'next/head';
import ArticleList from '~/components/articles/ArticleList';
import Layout from '~/components/Layout';
import { fetchAPI } from '~/lib/graphql';

const Home = ({ articles }) => {
  return (
    <Layout>
      <Head>
        <title>NucleOeiras</title>
        <meta name='description' content='NucleOeiras' />
      </Head>

      <ArticleList articles={articles} />
    </Layout>
  );
};

const HOME_PAGE_QUERY = gql`
  query HOME_PAGE_QUERY {
    articles(limit: 12, sort: "created_at:desc") {
      slug
      title
      description
      created_at
      image {
        url
      }
    }
  }
`;

export const getStaticProps = async () => {
  const { articles } = await fetchAPI(HOME_PAGE_QUERY);

  return {
    revalidate: 30,
    props: { articles },
  };
};

export default Home;
