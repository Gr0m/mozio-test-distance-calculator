import { useStyletron } from 'styletron-react';

const Path = () => {
  const [css] = useStyletron();

  return (
    <svg
      width="2"
      height="44"
      viewBox="0 0 2 44"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={css({ flex: '1' })}>
      <path
        d="M1 1L1.00001 43"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="0.01 8"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default Path;
