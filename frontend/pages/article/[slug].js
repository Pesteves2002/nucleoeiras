import { Container, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import gql from 'graphql-tag';
import Head from 'next/head';
import React from 'react';
import BackendImage from '~/components/BackendImage';
import Layout from '~/components/Layout';
import Markdown from '~/components/text/Markdown';
import { fetchAPI } from '~/lib/graphql';

const ArticlePage = ({ article }) => {
  return (
    <Layout backUrl='/'>
      <Head>
        <title>NucleOeiras</title>
        <meta name='description' content='NucleOeiras' />
      </Head>

      <Container sx={{ textAlign: 'justify' }}>
        <Typography variant='h3' component='h1'>
          {article?.title}
        </Typography>
        <Typography variant='h5' component='h2' color='text.secondary' gutterBottom>
          {article?.description}
        </Typography>

        <Box textAlign='center'>
          <BackendImage src={article?.image?.url} />
        </Box>

        <Markdown>{article?.content || ''}</Markdown>
      </Container>
    </Layout>
  );
};

const ARTICLE_PAGE_QUERY = gql`
  query ARTICLE_PAGE_QUERY($id: ID!) {
    article(id: $id) {
      title
      description
      created_at
      slug
      image {
        url
      }
      content
    }
  }
`;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const { article } = await fetchAPI(ARTICLE_PAGE_QUERY, {
    variables: {
      id: slug,
    },
  });

  return {
    revalidate: 30,
    props: {
      article,
    },
  };
};

export default ArticlePage;
