import * as React from 'react';
import * as ReactDom from 'react-dom'; 
import axios, {AxiosResponse} from 'axios';
import {useContext} from 'react';
import StoryContext from '../contexts/StoryContext';

/*MATERIAL UI IMPORTS*/
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//typescript definition of room
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

  //Destructure pieces of state relevant to this component
  const { prompt, updatePrompt , room} = useContext(StoryContext);
  
  //Axios call stored as function definition to be called when React.useEffect is invoked.
  const getPromptData = () => {

    //Database and Context API expect room to be a string,
    //stringify room to append to url
    const roomStr: string = room.toString(); 
    axios.get(`http://localhost:3000/api/prompts/${roomStr}`)
      .then((res: AxiosResponse) => {

        //data is returned from database as an array of objects.
        //destructure prompt from the 0th index of response
        const { prompt } = res.data[0];

        //update prompt state with data fetch'd from database
        //hooks are articulated in contexts/StoryContext.tsx
        updatePrompt(prompt); 
      })
      .catch((err: 'string') => console.log(err));
  }
  
  //This is buggy. getPromptData fetch's initial prompt from DB
  //if useEffect is omitted, the user must submit correct answer twice
  //in order to render the next room
  React.useEffect(() => {
    getPromptData();
  })
    return (
        <div className="promptBox">
            <div>{prompt}</div>
        </div>
    )
  }    
 export default Prompt;
