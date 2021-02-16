import * as React from "react";
import Axios, { AxiosResponse } from "axios";
const { useState } = React;

interface Get {
  method: string,
  url: string,
  data: object,
  headers: object,
  params:object,
}

const Hint = () => {
  
  const [hintText, setHint] = useState("Try turning on the lights");
  const [room, setRoom] = useState(1);
  
  React.useEffect(() => {
    
    const options: Get = {
      method: "GET",
      url:'http://localhost:3000/api/hints',
      data:{},
      headers:{},
      params: {"room": room },
    }
    Axios.get('api/hint')
      .then((response: AxiosResponse) => {
        console.log("🚀 ~ file: Hint.tsx ~ line 29 ~ .then ~ response", response)
        setHint(response.data)
      })
      .catch(err => console.log(err));
    });
  return (
  <div className="box">
      Hint: <br />
      {hintText}
  </div>
  )
};

};


};



};



};


};



};



};



};


};



};



};



};


};



};



};


export default Hint;