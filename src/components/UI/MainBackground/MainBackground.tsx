import Image from 'next/image';
import bgImg from '@public/bg.png';
import { useStyletron } from 'styletron-react';

const MainBackground = () => {
  const [css] = useStyletron();

  return (
    <Image
      src={bgImg}
      alt=""
      priority
      className={css({
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        zIndex: -10
      })}
    />
  );
};

export default MainBackground;
