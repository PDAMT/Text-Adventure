import * as React from 'react';

<<<<<<< HEAD
const HomePageRenderer = () => {
  const myHeading: string = 'My Website Heading';
  return (
    <div>
      <h1> {myHeading} </h1>
    </div>
  )
};
// const OtherHeading: React.FC = () => {
//   return (

//   )

// }

// export default HomePageRenderer;
=======
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
>>>>>>> 4cc05ea3a0f314fe776becfb7a8f424dd607d92c
