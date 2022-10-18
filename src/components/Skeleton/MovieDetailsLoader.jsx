import React from 'react';
import ContentLoader from 'react-content-loader';

function MovieDetailsLoader() {
  return (
    <ContentLoader
      width={800}
      height={582}
      backgroundColor='#212121'
      foregroundColor='#313131'
    >
      <rect x='42.84' y='9.93' rx='5' ry='5' width='333.33' height='500' />
      <rect x='430' y='9.67' rx='0' ry='0' width='300' height='25' />
      <rect x='430' y='50' rx='0' ry='0' width='230' height='150' />
      <rect x='430' y='250' rx='0' ry='0' width='230' height='9' />
      <rect x='430' y='270' rx='0' ry='0' width='230' height='9' />
      <rect x='430' y='270' rx='0' ry='0' width='230' height='9' />
      <rect x='430' y='290' rx='0' ry='0' width='230' height='9' />
      <rect x='430' y='310' rx='0' ry='0' width='230' height='9' />
      <rect x='430' y='330' rx='0' ry='0' width='230' height='9' />
    </ContentLoader>
  );
}

export default MovieDetailsLoader;
