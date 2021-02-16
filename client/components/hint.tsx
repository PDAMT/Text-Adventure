import * as React from "react";
import Axios, { AxiosResponse } from "axios";
const { useState } = React;

interface Get {
  method: string,
  headers: object,
}

const Hint = () => {
  
  const [hintText, setHint] = useState("Try turning on the lights");
  const [room, setRoom] = useState("1");
  
  React.useEffect(() => {
    
    fetch("http://localhost:3000/api/hints/1")
      .then((response:any) => {
        console.log("about to parse")
        return response.json();
      })
      .then(result => setHint(result[0].hint))
      .catch(error => console.log('error', error));
  });

  return (
  <div className="box">
      Hint: <br />
      {hintText}
  </div>
  )
}
export default Hint;