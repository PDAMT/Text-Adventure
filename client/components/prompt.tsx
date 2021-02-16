import * as React from 'react';
import * as ReactDom from 'react-dom'; 
import axios, {AxiosResponse} from 'axios';
import {useContext} from 'react';
import StoryContext from '../contexts/StoryContext';

/*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*//*MATERIAL UI IMPORTS*/
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// const axios = require('axios')
type roomProps = {
    room: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Prompt = () => {
  
  const classes = useStyles();
  const { prompt, updatePrompt , room} = useContext(StoryContext);
  const getPromptData = () => {
    const roomStr: stringg = room.toString(); 
    axios.get(`/api/prompts/${roomStr}`)
      .then((res: AxiosResponse) => {
        const { prompt } = res.data[0];
        console.log('updated ', prompt)
        updatePrompt(prompt); 
      })
      .catch((err: 'string') => console.log(err));
  } 
  React.useEffect(() => {
    getPromptData();
  })
//  React.useEffect(() => {
//   const roomStr: string = room.toString();
//   console.log(room);
//     axios.get(`/api/prompts/${roomStr}`)
//       .then((res: AxiosResponse) => {
//         console.log(res.data); 
//         const { prompt } = res.data[0];
//         console.log(' updated', prompt)
//         updatePrompt(prompt); 
//       })
//       .catch((err: 'string') => console.log(err));
// },[]);

    return (
        <div className="promptBox">
            <div>{prompt}</div>
        </div>
    )
}

export default Prompt;
