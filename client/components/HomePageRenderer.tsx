import * as React from 'react';
import Prompt from './prompt';
type AppProps = { room: number}

const HomePageRenderer = ({room}: AppProps) => {
  let myHeading: string = 'My Website Heading';
  async function test() {
    const result: Response = await fetch('google.com');

  }
  React.useEffect(() => {
    test();
  });
  return (
      <Prompt room={room} />
  )
};

export default HomePageRenderer;