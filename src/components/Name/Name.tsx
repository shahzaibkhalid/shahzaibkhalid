/** @jsx jsx */
import { FunctionComponent, useRef } from 'react';
import { jsx } from '@emotion/core';
// import useResizeObserver from 'hooks/useResizeObserver';
// import breakpoints from 'constants/breakpoints';
import Container from 'components/Container/Container';

interface Props {
  children: string;
}

const Name: FunctionComponent<Props> = ({ children }): JSX.Element => {
  type JSXElt = HTMLDivElement;
  const ref = useRef<JSXElt>(null);
  // const [width] = useResizeObserver<JSXElt>(ref);
  return (
    <Container ref={ref}>
      <h1
        css={{
          fontSize: 20,
        }}
      >
        {children}
      </h1>
    </Container>
  );
};

export default Name;
