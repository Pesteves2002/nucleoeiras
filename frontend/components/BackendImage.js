import React from 'react';

const BackendImage = ({ src, ...props }) => {
  const parsedSrc = src?.startsWith('/') ? `${process.env.imageBaseUrl}${src}` : src;

  return <img src={parsedSrc} style={{ maxWidth: '100%' }} {...props} />;
};

export default BackendImage;
