import * as React from "react";
import Axios, { AxiosResponse } from "axios";
const { useState } = React;

//functional component for hint
const Hint = () => {
  
  //define hooks to hint text and room state.
  const [hintText, setHint] = useState("Try turning on the lights");
  const [room, setRoom] = useState("1");
  
  //useEffect allows side-effects like AJAX calls in functional components
  React.useEffect(() => {

    //stringify room to include in url. database and context API expect 'room' to be of type string
    const roomStr: string = room.toString();

    fetch(`http://localhost:3000/api/hints/${roomStr}`)
      .then((response:any) => {
        return response.json();
      })

      //setHint hooks the hintText, updating its text value to the evaluated result
      //of querrying the DB for the hint corresponding to each room
      .then(result => setHint(result[0].hint))
      .catch(error => console.log('error', error));
  });

  //this currently returns an empty component as the hint functionality is unfinished.
  return (
  <div className="box">
      Hint: <br />
      {}
  </div>
  )
}
export default Hint;