import * as React from 'react';
import * as ReactDom from 'react-dom'; 
import axios, {AxiosResponse} from 'axios'; 

// const axios = require('axios')
type roomProps = {
    room: number;
}

const roomPrompt = ({room}: roomProps) => {

   const [prompt, updatePrompt] = React.useState<string |null>('Welcome Players');

    React.useEffect(() => {
        axios.get('/prompt', {
            params: {"room": room }
      })
      .then((prompt: AxiosResponse) => {
        updatePrompt(prompt.data); 
      })
      .catch((err: 'string') => console.log(err));
    },[]);

    return (
        <div className="promptBox">
            <div className="promptText">{prompt}</div>
        </div>
    )
}

export default roomPrompt; 


// type AppProps = { message: string }

// const HomePageRenderer = ({ message }: AppProps) => {
//   let myHeading: string = 'My Website Heading';
//   async function test() {
//     const result: Response = await fetch('google.com');
//   }
//   React.useEffect(() => {
//     test();
//   });
//   return (
//     <div>
//       <h1> {myHeading} </h1>
//     </div>
//   )
// };
