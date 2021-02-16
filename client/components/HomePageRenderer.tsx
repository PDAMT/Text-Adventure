import * as React from 'react';
import Prompt from './Prompt';
import Hint from './Hint';
type AppProps = { room: number}

const HomePageRenderer = ({room}: AppProps) => {
  return (
    <div>
      <Prompt room={room} />
      <Hint />
    </div>

    )
};

export default HomePageRenderer;
