import React,{useState, useEffect} from 'react';

function Terminal() {
  let [query, setQuery] = useState("");
  const inputRef = React.createRef();
  const [count, setCount] = useState(0);


  const checker = (e:any) => {
    e.preventDefault();
    console.log('query',query);
    if (query === "test_input") console.log("to the next room");
    else setCount(count + 1);
    if (count === 2) console.log("displaying hint");
  };

  useEffect(() => {
    console.log(`you have updated your query to ${query}`);
  }, [query]);

  const updateQuery = (event:any) => {
    setQuery(query = event.target.value);
  };

  return (
    <div>
      <form onSubmit={checker}>
        <input type="text" placeholder="Enter Text here" onChange={updateQuery}/>
        <input type="submit" />
        <h4>{query}</h4>
      </form>
    </div>
  );
}

export default Terminal;