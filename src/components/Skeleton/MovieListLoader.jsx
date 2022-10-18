import ContentLoader from 'react-content-loader';

function MovieListLoader() {
  const rows = 2;
  const columns = 4;
  const coverHeight = 450;
  const coverWidth = 250;
  const padding = 48;
  const speed = 1;

  const coverHeightWithPadding = coverHeight + padding;
  const coverWidthWithPadding = coverWidth + padding;
  const initial = 35;
  const covers = Array(columns * rows).fill(1);

  return (
    <ContentLoader
      speed={speed}
      width={columns * coverWidthWithPadding}
      height={rows * coverHeightWithPadding}
      backgroundColor='#212121'
      foregroundColor='#313131'
    >
      {covers.map((g, i) => {
        const vy = Math.floor(i / columns) * coverHeightWithPadding + initial;
        const vx =
          (i * coverWidthWithPadding) % (columns * coverWidthWithPadding);
        return (
          <rect
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            x={vx}
            y={vy}
            rx='5'
            ry='5'
            width={coverWidth}
            height={coverHeight}
          />
        );
      })}
    </ContentLoader>
  );
}

export default MovieListLoader;
