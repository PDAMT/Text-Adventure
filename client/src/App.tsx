import * as React from 'react';
import HomePageRenderer from '../components/HomePageRenderer'
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <>
      <CssBaseline />
      <div id="app">
<<<<<<< HEAD
        <HomePageRenderer room={1}/>
=======
        <h1>App is Running</h1>
        <HomePageRenderer message={"Some Message"}/>
>>>>>>> main
      </div>
    </>
  )
};

export default App;