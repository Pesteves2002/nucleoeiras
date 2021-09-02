import { Link, Typography } from '@material-ui/core';
import ReactMarkdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';
import React from 'react';

const markdownOptions = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: ({ ...props }) => (
        <li>
          <Typography component='span' {...props} />
        </li>
      ),
    },
    img: {
      // eslint-disable-next-line react/prop-types
      component: ({ src, ...props }) => {
        const newSrc = (src || '').startsWith('/')
          ? `${process.env.imageBaseUrl}${src || ''}`
          : src;
        return <img src={newSrc} {...props} />;
      },
    },
  },
};

const Markdown = ({ children, className }) => (
  <ReactMarkdown options={markdownOptions} className={className}>
    {children}
  </ReactMarkdown>
);

Markdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Markdown.defaultProps = {
  className: '',
};

export default Markdown;
