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