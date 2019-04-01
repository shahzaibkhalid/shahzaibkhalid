/**@jsx jsx */
import { jsx } from '@emotion/core';
import { FunctionComponent, useRef } from 'react';
import Container from 'components/Container/Container';

interface Props {
  listItems: { data: string | JSX.Element; emoji: string }[];
}

const List: FunctionComponent<Props> = ({ listItems }): JSX.Element => {
  type JSXElt = HTMLDivElement;
  const ref = useRef<JSXElt>(null);
  return (
    <Container ref={ref} css={{ justifyContent: 'flex-start', lineHeight: 1.5 }}>
      <ul css={{ listStyle: 'none', marginLeft: 0, paddingLeft: 0 }}>
        {listItems.map((list, index) => (
          <li
            css={{
              ':before': {
                content: `"${list.emoji}"`,
                paddingRight: 5,
              },
              fontSize: 18,
            }}
            key={index}
          >
            {list.data}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default List;
