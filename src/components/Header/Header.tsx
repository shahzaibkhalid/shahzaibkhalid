/**@jsx jsx */
import { jsx } from '@emotion/core';
// import Avatar from 'components/Avatar/Avatar';
import Name from 'components/Name/Name';
// import myEmoji from 'assets/profile.jpg';
import TagLine from 'components/TagLine/TagLine';
import Description from 'components/Description/Description';
import Heading from 'components/Heading/Heading';
import List from 'components/List/List';
import WrapEmoji from 'components/WrapEmoji/WrapEmoji';

const Header = (): JSX.Element => {
  return (
    <div
      css={{
        maxWidth: '36rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 10,
      }}
    >
      {/* <Avatar src={myEmoji} alt='Shahzaib Avatar' /> */}
      <Name>Shahzaib Khalid</Name>
      <TagLine>
        Developer Advocate for JavaScript{' '}
        <WrapEmoji emoji='👨🏻‍💻' description='Technologist' />
      </TagLine>
      <Description>
        Hi! <WrapEmoji emoji='👋' description='Wave' /> I&apos;m Shahzaib. I&apos;m a
        Front-End Engineer based in Lahore, Pakistan.{' '}
        <WrapEmoji emoji='🇵🇰' description='Pakistani Flag' /> I develop web
        applications using JavaScript & React. ⚛️ I also build developer tools and
        release and maintain them in open source. I&apos;m insanely interested in
        Developer Experience and Front-End Toolkits.{' '}
        <WrapEmoji emoji='🛠' description='hammer & wrench' /> Here are some important
        links about me! 🙌
      </Description>
      <List
        listItems={[
          {
            data: (
              <a href='mailto:me@shahzaibkhalid.com?subject=Hi!'>
                me@shahzaibkhalid.com
              </a>
            ),
            emoji: '📧',
          },
          {
            data: (
              <a
                href='https://www.twitter.com/shahzaibkhalid'
                rel='noopener noreferrer'
                target='_blank'
              >
                twitter.com/shahzaibkhalid
              </a>
            ),
            emoji: '🐦',
          },
          {
            data: (
              <a
                href='https://www.github.com/shahzaibkhalid'
                rel='noopener noreferrer'
                target='_blank'
              >
                github.com/shahzaibkhalid
              </a>
            ),
            emoji: '💻',
          },
          {
            data: (
              <a
                href='https://www.linkedin.com/in/shahzaibkhalid/'
                rel='noopener noreferrer'
                target='_blank'
              >
                linkedin.com/shahzaibkhalid
              </a>
            ),
            emoji: '🤝',
          },
          {
            data: (
              <a
                href='https://www.quora.com/profile/Shahzaib-Khalid-9'
                rel='noopener noreferrer'
                target='_blank'
              >
                quora.com/shahzaibkhalid
              </a>
            ),
            emoji: '📖',
          },
        ]}
      />
      <Heading>Open Source Software</Heading>
      <Description>
        Apart from my full-time job, I do spend a lot of time building Open Source
        Software. Here&apos;s a list of some notable open source softwares I&apos;m
        currently building & maintaining. Do check them out!{' '}
        <WrapEmoji emoji='👇' description='Down Arrow' />
      </Description>
      <List
        listItems={[
          {
            data: (
              <a
                href='https://github.com/shahzaibkhalid/shaizei'
                rel='noopener noreferrer'
                target='_blank'
              >
                shaizei — Toolkit for building & maintaining futuristic React apps.
              </a>
            ),
            emoji: '🛠',
          },
          {
            data: (
              <a
                href='https://github.com/shahzaibkhalid/shaizei-starter-javascript'
                rel='noopener noreferrer'
                target='_blank'
              >
                shaizei-starter-javascript — An official starter kit for
                React-JavaScript applications created with @shaizei/cli.
              </a>
            ),
            emoji: '🚀',
          },
          {
            data: (
              <a
                href='https://github.com/shahzaibkhalid/shaizei-starter-typescript'
                rel='noopener noreferrer'
                target='_blank'
              >
                shaizei-starter-typescript — An official starter kit for
                React-TypeScript applications created with @shaizei/cli.
              </a>
            ),
            emoji: '✌️',
          },
        ]}
      />
      <Heading>Blog Posts</Heading>
      <List
        listItems={[
          { data: 'The Power of Now', emoji: '👀' },
          { data: 'An Introductory Session to Babel', emoji: '🙌' },
          { data: 'How to use TypeScript', emoji: '🙌' },
        ]}
      />
    </div>
  );
};

export default Header;
