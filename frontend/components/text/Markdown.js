import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { Box } from '@material-ui/system';
import ReactMarkdown from 'markdown-to-jsx';
import PropTypes from 'prop-types';
import React from 'react';
import BackendImage from '../BackendImage';

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
    li: { component: Typography, props: { component: 'li' } },
    img: {
      component: ({ ...props }) => (
        <Box textAlign='center'>
          <BackendImage {...props} />
        </Box>
      ),
    },
    table: { component: Table },
    thead: { component: TableHead },
    th: { component: TableCell },
    tr: { component: TableRow },
    td: { component: TableCell },
    tbody: { component: TableBody },
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
