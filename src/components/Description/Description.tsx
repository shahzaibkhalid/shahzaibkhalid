/**@jsx jsx */
import { jsx } from '@emotion/core';
import { useRef, FunctionComponent } from 'react';
// import useResizeObsever from 'hooks/useResizeObserver';
import Container from 'components/Container/Container';
import colors from 'constants/colors';
// import breakpoints from 'constants/breakpoints';

const Description: FunctionComponent = ({ children }): JSX.Element => {
  type JSXElt = HTMLDivElement;
  const ref = useRef<JSXElt>(null);
  // const [width] = useResizeObsever<JSXElt>(ref);
  return (
    <Container ref={ref} css={{ justifyContent: 'flex-start' }}>
      <p
        css={{
          color: colors.black,
          fontSize: 18,
          lineHeight: 1.5,
        }}
      >
        {children}
      </p>
    </Container>
  );
};

export default Description;
