import React,{useState, useEffect, useContext} from 'react';
import axios, {AxiosResponse} from 'axios';
import StoryContext from '../contexts/StoryContext';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

  let [query, setQuery] = useState("");
  const inputRef = React.createRef();
  const [count, setCount] = useState(0);
  const { hint, updateHint, answer, updateAnswer, room, updateRoom } = useContext(StoryContext);

  const getAnswerData = () => {
    const roomStr = room.toString();
    axios.get(`/api/rooms/${roomStr}`)
      .then((res: AxiosResponse) => {
        const { answer } = res.data[0];
        updateAnswer(answer);
      })
      .catch(err => console.error(err));
  }

  //set initial state by fetching DB
  if(room === 1){
    getAnswerData();
  }
  
  //With each character inputted, the query string which holds the users input is updated by said character
  const handleChange = (event:any) => {
    event.preventDefault();
    setQuery(query=event.target.value)
    console.log("user input: ", event.target.value)
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if(query === answer) {
      updateRoom(room + 1)
      updateAnswer(getAnswerData());
      console.log("Answer is correct");
      console.log("======================checks out==============");
    }    
  }
  //renders textbox and invokes query with every change, and invokes checker when the form is submitted
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user-input" placeholder="Enter Text here" value={query} onChange={handleChange} />
        <input type="submit" />
      </form>
      <Paper className={classes.root} elevation={6}>{answer}</Paper>
    </div>
  )
}


export default Terminal;