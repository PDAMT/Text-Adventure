import * as React from 'react';
import Prompt from './Prompt';
import Hint from './Hint';
import Terminal from './Terminal';

type AppProps = { room: number};

const HomePageRenderer = () => {
  return (
    <div>
      <Prompt  />
      <Terminal />
      <Hint />
    </div>
  )
};

export default HomePageRenderer;