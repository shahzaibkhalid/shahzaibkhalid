/**@jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent, useRef } from 'react';
import Container from 'components/Container/Container';
import colors from 'constants/colors';

const Heading: FunctionComponent = ({ children }): JSX.Element => {
  type JSXElt = HTMLDivElement;
  const ref = useRef<JSXElt>(null);
  return (
    <Container ref={ref} css={{ justifyContent: 'flex-start' }}>
      <h2
        css={{
          color: colors.pink,
        }}
      >
        {children}
      </h2>
    </Container>
  );
};

export default Heading;
