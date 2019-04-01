/** @jsx jsx */
import { FunctionComponent, useRef } from 'react';
// import useResizeObserver from 'hooks/useResizeObserver';
// import breakpoints from 'constants/breakpoints';
import { jsx } from '@emotion/core';
import Container from 'components/Container/Container';

interface Props {
  src: string;
  alt: string;
}

const Avatar: FunctionComponent<Props> = (props): JSX.Element => {
  type JSXElt = HTMLDivElement;
  const ref = useRef<JSXElt>(null);
  // const [width] = useResizeObserver<JSXElt>(ref);
  const { src, alt } = props;
  return (
    <Container ref={ref}>
      <img
        src={src}
        alt={alt}
        css={{
          width: 150,
          height: 150,
        }}
      />
    </Container>
  );
};

export default Avatar;
