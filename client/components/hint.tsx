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
        console.log(response)
      })
      .then(result => console.log("hey I got here",result))
      .catch(error => console.log('error', error));
  });
    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json"); 

    // const requestOptions: Get = {
    //   method: 'GET',
    //   headers: myHeaders,
    // }


  return (
  <div className="box">
      Hint: <br />
      {hintText}
  </div>
  )
}
export default Hint;

    // //  React.useEffect(() => {
// //     const roomNum: string = '1'; 
// //     const dbQuery = '/api/prompts/' + roomNum; 

    // axios.get(dbQuery)
    //   .then((res: AxiosResponse) => {
    //     const { prompt } = res.data[0];
    //     console.log(' updated', prompt)
    //     updatePrompt(prompt); 
    //   })
    //   .catch((err: 'string') => console.log(err));
    // },[]);

        
    // const options: Get = {
    //   method: "GET",
    //   data:{},
    //   headers:{},
    //   params: {"room": room },
    // }

    // Axios.get(`/api/hints/1`)
    //   .then((response: AxiosResponse) => {
    //     console.log("==============response object below==================")
    //     console.log("🚀 ~ file: Hint.tsx ~ line 29 ~ .then ~ response", response)
    //     setHint(response.data)
    //   })
    //   .catch(err => console.log(err));
    // }, []);