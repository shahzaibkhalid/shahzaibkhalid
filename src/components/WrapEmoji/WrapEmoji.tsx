import React, { FunctionComponent } from 'react';

interface Props {
  emoji: string;
  description: string;
}

const WrapEmoji: FunctionComponent<Props> = ({
  emoji,
  description,
}): JSX.Element => (
  <span role='img' aria-label={description}>
    {emoji}
  </span>
);

export default WrapEmoji;
