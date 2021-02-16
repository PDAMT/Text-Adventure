import * as React from 'react';
import Prompt from './prompt';
import Terminal from './Terminal';
type AppProps = { room: number}

const HomePageRenderer = ({room}: AppProps) => {
  return (
    <div>
      <Prompt room={room} />
      <Terminal />
    </div>
  )
};

export default HomePageRenderer;