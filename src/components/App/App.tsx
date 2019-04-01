import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from 'components/Header/Header';
import { Global } from '@emotion/core';
import globals from 'constants/globals';
import colors from 'constants/colors';

const App = (): JSX.Element => (
  <div>
    <Global
      styles={{
        '*': {
          fontFamily: globals.fontFamily,
        },
        '::selection': {
          color: 'black',
          backgroundColor: colors.lightPink,
        },
        a: {
          textDecoration: 'none',
          borderBottom: `1px solid ${colors.pink}`,
        },
        'a:hover': {
          color: 'black',
          backgroundColor: colors.lightPink,
        },
        'a:visited, a:link:active, a:link': {
          color: 'black',
        },
      }}
    />
    <Header />
  </div>
);

export default hot(App);
