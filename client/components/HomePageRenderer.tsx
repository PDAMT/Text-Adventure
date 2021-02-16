import * as React from 'react';
import Prompt from './Prompt';
import Terminal from './Terminal';
import Hint from './Hint';

type AppProps = { room: number}

const HomePageRenderer = ({room}: AppProps) => {

  return (
    <div>
      <Prompt room={room} />
      <Terminal/>
      <Hint />
    </div>
  )
};

export default HomePageRenderer;
