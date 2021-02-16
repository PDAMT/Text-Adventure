import * as React from 'react';
import Prompt from './Prompt';
import Hint from './Hint';
import Terminal from './Terminal';

type AppProps = { room: number};

const HomePageRenderer = () => {
  return (
    <div className="home-container lobby">
      <div className="top-container">
        <Prompt  />
        <Hint />
        
      </div>
      <Terminal />
    </div>
  )
};

export default HomePageRenderer;
