import * as React from 'react';
import Prompt from './Prompt';
import Hint from './Hint';
import Terminal from './Terminal';

//Typescript type definition of room
type AppProps = { room: number};

//render all children components
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
