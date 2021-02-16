import * as React from "react";
 
const { useState } = React;
 
 
const Hint = () => {
 
  return (
    <div>
      <div className="box">
        Hint: <br />
        {/* we can inject hint text from state here */}
      </div>
    </div>
  )
};
 
export default Hint;