import React,{useState, useEffect, useContext} from 'react';
import axios, {AxiosResponse} from 'axios';
import StoryContext from '../contexts/StoryContext'
// import "./styles.css";

function Terminal() {
  let [query, setQuery] = useState("");
  const inputRef = React.createRef();
  const [count, setCount] = useState(0);
  const { hint, updateHint, answer, updateAnswer,room, updateRoom} = useContext(StoryContext);
 
  const getAnswerData = () => {
    axios.get('/rooms/:id') 
    .then((res: AxiosResponse) => console.log(res))
    .catch(err => console.error(err));
}

const getHintData = () => {
  axios.get('api/hint/') 
  .then((res: AxiosResponse) => console.log(res))
  .catch(err => console.error(err));
  }



  //checks the users input and performs functionality based on it
  const checker = (e:any) => {
    e.preventDefault();
    if (query === answer){ 
      updateRoom(room + 1) 
      updateAnswer(getAnswerData)
    }

    else setCount(count + 1);
    if (count === 2){ 
      hint /* confused how i reveal this */
      updateHint(getHintData)
    }
  }; 
  
  //testing purposes only
  useEffect(() => {
    console.log(`you have updated your query to ${query}`);
  }, [query]);

  //With each character inputted, the query string which holds the users input is updated
  const updateQuery = (event:any) => {
    setQuery(query = event.target.value);
  };

  //renders textbox and invokes query with every change, and invokes checker when the form is submitted
  return (
    <div>
      <form onSubmit={checker}>
        <input type="text" placeholder="Enter Text here" onChange={updateQuery}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Terminal;



