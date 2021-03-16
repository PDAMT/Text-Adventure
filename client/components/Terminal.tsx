import React,{useState, useEffect, useContext} from 'react';
import axios, {AxiosResponse} from 'axios';
import StoryContext from '../contexts/StoryContext';
import { jssPreset, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Backdrop } from '@material-ui/core';

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

function Terminal() {
  const classes = useStyles();

  //hook text that user types into terminal
  let [userText, setText] = useState("");

  //count and setCount not currently functional
  //intended use: render hint text upon 3 failed submissions
  const [count, setCount] = useState(0);

  //destructure state relevant to this component
  //Context articulated in contexts/StoryContext.tsx
  const { answer, updateAnswer, room, updateRoom } = useContext(StoryContext);

  //Database querry declared as a function definition to be called by useEffect
  const getAnswerData = () => {

    //database and Context API expect room to be of type string
    const roomStr: string = room.toString();

    //append stringified room number to end of url to access 
    //the next correct answer from database
    axios.get(`http://localhost:3000/api/rooms/${roomStr}`)
      .then((res: AxiosResponse) => {

        //database returns an array of objects.
        const { answer } = res.data[0];
        updateAnswer(answer);
      })
      .catch(err => console.error(err));
  }

  //set initial state by fetching DB
  useEffect(() => {
    getAnswerData();
  })
  
  
  //updates state upon every keystroke of user
  const handleChange = (event:any) => {
    event.preventDefault();
    setText(userText=event.target.value)
  }

  //compares state to correct answer
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(userText === answer) {

      //if user submits the correct answer, increment room to render next room and fetch next answer from DB
      updateRoom(room + 1)
      updateAnswer(getAnswerData());
    }    
  }

  //renders textbox and invokes userText with every change, and invokes checker when the form is submitted
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="user-input" placeholder="Enter Text here" value={userText} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}


export default Terminal;
