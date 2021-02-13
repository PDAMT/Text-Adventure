import * as React from 'react';

type AppProps = { message: string }

const HomePageRenderer = ({ message }: AppProps) => {
  let myHeading: string = 'My Website Heading';
  async function test() {
    const result: Response = await fetch('google.com');
    console.log(result);
  }
  React.useEffect(() => {
    test();
  });
  return (
    <div>
      <h1> {myHeading} </h1>
    </div>
  )
};

export default HomePageRenderer;