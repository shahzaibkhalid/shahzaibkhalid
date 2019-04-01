/**@jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent, useRef } from 'react';
// import useResizeObsever from 'hooks/useResizeObserver';
import Container from 'components/Container/Container';
import colors from 'constants/colors';
// import breakpoints from 'constants/breakpoints';

const TagLine: FunctionComponent = ({ children }): JSX.Element => {
  type JSXElt = HTMLDivElement;
  const ref = useRef<JSXElt>(null);
  // const [width] = useResizeObsever<JSXElt>(ref);
  return (
    <Container ref={ref}>
      <h2
        css={{
          color: colors.pink,
          fontSize: 18,
          margin: 0,
        }}
      >
        {children}
      </h2>
    </Container>
  );
};

export default TagLine;
